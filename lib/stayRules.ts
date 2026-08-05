/**
 * Minimum-stay rules, shared by the client form and the server action so the
 * two can never drift apart.
 *
 * From the owners' rate schedule: three nights minimum year-round, rising to
 * seven over the holiday periods (Thanksgiving, Christmas, New Year's).
 */

export const MIN_NIGHTS = 3;
export const HOLIDAY_MIN_NIGHTS = 7;

/**
 * Holiday windows as month/day pairs, so they hold from year to year without
 * needing to be re-entered each season. These mirror the published rate table:
 * Thanksgiving 20–29 Nov, Christmas 18–25 Dec, New Year 26 Dec – 4 Jan.
 */
const HOLIDAY_WINDOWS: { label: string; from: [number, number]; to: [number, number] }[] = [
  { label: "Thanksgiving", from: [11, 20], to: [11, 29] },
  { label: "Christmas", from: [12, 18], to: [12, 25] },
  { label: "New Year's", from: [12, 26], to: [1, 4] }, // wraps the year end
];

/** Parse a YYYY-MM-DD value as a UTC date, avoiding local-timezone drift. */
export function parseDate(v: string): Date | null {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(v);
  if (!m) return null;
  const d = new Date(Date.UTC(+m[1], +m[2] - 1, +m[3]));
  return Number.isNaN(d.getTime()) ? null : d;
}

export function nightsBetween(checkIn: Date, checkOut: Date): number {
  return Math.round((checkOut.getTime() - checkIn.getTime()) / 86_400_000);
}

function inWindow(
  d: Date,
  from: [number, number],
  to: [number, number]
): boolean {
  const md = (d.getUTCMonth() + 1) * 100 + d.getUTCDate();
  const a = from[0] * 100 + from[1];
  const b = to[0] * 100 + to[1];
  // A window like 26 Dec – 4 Jan wraps, so the test inverts.
  return a <= b ? md >= a && md <= b : md >= a || md <= b;
}

/** Which holiday, if any, the stay touches. Checks every night in the range. */
export function holidayTouched(checkIn: Date, checkOut: Date): string | null {
  const nights = nightsBetween(checkIn, checkOut);
  for (let i = 0; i < nights; i++) {
    const d = new Date(checkIn.getTime() + i * 86_400_000);
    for (const w of HOLIDAY_WINDOWS) {
      if (inWindow(d, w.from, w.to)) return w.label;
    }
  }
  return null;
}

export type StayCheck = {
  ok: boolean;
  /** Null when the guest simply hasn't filled both dates in yet. */
  error: string | null;
  nights: number | null;
  requiredMin: number;
  holiday: string | null;
};

/**
 * Validate a requested stay. Incomplete dates are not an error — the guest may
 * still be filling the form in, and dates are optional on an inquiry.
 */
export function checkStay(checkInRaw: string, checkOutRaw: string): StayCheck {
  const base: StayCheck = {
    ok: true,
    error: null,
    nights: null,
    requiredMin: MIN_NIGHTS,
    holiday: null,
  };

  if (!checkInRaw || !checkOutRaw) return base;

  const checkIn = parseDate(checkInRaw);
  const checkOut = parseDate(checkOutRaw);
  if (!checkIn || !checkOut) return base;

  const nights = nightsBetween(checkIn, checkOut);

  if (nights <= 0) {
    return {
      ...base,
      ok: false,
      nights,
      error: "Your departure date needs to be after your arrival date.",
    };
  }

  const holiday = holidayTouched(checkIn, checkOut);
  const requiredMin = holiday ? HOLIDAY_MIN_NIGHTS : MIN_NIGHTS;

  if (nights < requiredMin) {
    const night = (n: number) => `${n} night${n === 1 ? "" : "s"}`;
    return {
      ok: false,
      nights,
      requiredMin,
      holiday,
      error: holiday
        ? `${holiday} stays have a ${requiredMin}-night minimum — you've selected ${night(
            nights
          )}. Please extend your dates, or contact us directly and we'll see what we can do.`
        : `We have a ${requiredMin}-night minimum — you've selected ${night(
            nights
          )}. Please extend your dates, or contact us directly and we'll see what we can do.`,
    };
  }

  return { ok: true, error: null, nights, requiredMin, holiday };
}
