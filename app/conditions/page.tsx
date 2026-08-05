import Link from 'next/link'

export const metadata = {
  title: 'Conditions We Treat | Vatulé - Punta Mita Luxury Estate',
  description: 'Evidence-based care for a full range of mental health and behavioral health conditions at Vatulé, an ultra-luxury oceanfront estate in Punta Mita Resort.',
}

export default function ConditionsPage() {
  const conditions = [
    {
      name: 'Depression',
      slug: 'depression',
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" /></svg>,
      description: 'Persistent sadness, loss of interest, and fatigue affecting daily life. Our comprehensive approach combines evidence-based therapy and medication management tailored to your individual needs.'
    },
    {
      name: 'Anxiety Disorders',
      slug: 'anxiety-disorders',
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" /></svg>,
      description: 'Excessive worry, panic attacks, and physical symptoms like racing heart. We provide specialized treatment including cognitive behavioral therapy and relaxation techniques to help you regain control.'
    },
    {
      name: 'ADHD',
      slug: 'adhd',
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>,
      description: 'Difficulty focusing, impulsivity, and hyperactivity impacting work or school. Our treatment combines behavioral strategies, organizational coaching, and medication when appropriate for optimal function.'
    },
    {
      name: 'Bipolar Disorder',
      slug: 'bipolar-disorder',
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>,
      description: 'Extreme mood swings from manic highs to depressive lows. We offer comprehensive mood stabilization through medication management, therapy, and lifestyle interventions to maintain balance.'
    },
    {
      name: 'PTSD',
      slug: 'ptsd',
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>,
      description: 'Flashbacks, nightmares, and severe anxiety after traumatic events. Our trauma-informed care uses proven therapies like EMDR and cognitive processing to help you heal and reclaim your life.'
    },
    {
      name: 'OCD',
      slug: 'ocd',
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" /></svg>,
      description: 'Intrusive thoughts and repetitive behaviors that interfere with daily activities. We specialize in exposure and response prevention therapy, the gold standard treatment for breaking the OCD cycle.'
    },
    {
      name: 'Addiction & Substance Use',
      slug: 'addiction-substance-use',
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg>,
      description: 'Dependency on alcohol, drugs, or other substances affecting health and relationships. Our integrated approach addresses both addiction and underlying mental health conditions for lasting recovery.'
    },
    {
      name: 'Schizophrenia',
      slug: 'schizophrenia',
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
      description: 'Hallucinations, delusions, and disorganized thinking affecting perception of reality. Our compassionate team provides antipsychotic medication management and supportive therapy to improve quality of life.'
    },
    {
      name: 'Eating Disorders',
      slug: 'eating-disorders',
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>,
      description: 'Anorexia, bulimia, and binge eating disorder with distorted body image. We provide specialized nutritional counseling, therapy, and medical monitoring to support healthy recovery and lasting change.'
    },
    {
      name: 'Insomnia & Sleep Disorders',
      slug: 'insomnia-sleep-disorders',
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" /></svg>,
      description: 'Difficulty falling asleep, staying asleep, or poor sleep quality affecting daily function. Our sleep medicine specialists use cognitive behavioral therapy for insomnia and lifestyle modifications for restorative rest.'
    },
    {
      name: 'Personality Disorders',
      slug: 'personality-disorders',
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>,
      description: 'Long-standing patterns of thinking and behavior causing relationship and life difficulties. We offer dialectical behavior therapy and other specialized treatments to build healthier coping skills.'
    },
    {
      name: 'Grief & Trauma',
      slug: 'grief-trauma',
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" /></svg>,
      description: 'Overwhelming loss and emotional pain from death, loss, or traumatic experiences. Our compassionate grief counseling and trauma therapy help you process emotions and find meaning in moving forward.'
    }
  ]

  const warningSigns = [
    {
      title: 'Emotional Changes',
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12"><path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" /></svg>,
      signs: ['Persistent sadness or irritability', 'Loss of interest in activities', 'Extreme mood swings', 'Excessive worry or fear']
    },
    {
      title: 'Behavioral Changes',
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>,
      signs: ['Withdrawal from friends and family', 'Changes in sleep or appetite', 'Decline in work or school performance', 'Increased substance use']
    },
    {
      title: 'Physical Symptoms',
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>,
      signs: ['Unexplained aches and pains', 'Fatigue and low energy', 'Racing heart or difficulty breathing', 'Digestive problems']
    }
  ]

  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-cormorant text-5xl font-light mb-6">Conditions We Treat</h1>
          <p className="text-xl text-white/90 leading-relaxed">
            Evidence-based care for a full range of mental health and behavioral health conditions
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-[var(--color-ink)] text-center mb-4">Comprehensive Mental Health Care</h2>
          <p className="text-[var(--color-muted)] text-center text-lg mb-16 max-w-3xl mx-auto">
            Our experienced team provides specialized treatment for a wide range of conditions, using the latest evidence-based approaches tailored to your unique needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conditions.map((condition, index) => (
              <Link 
                key={index}
                href={`/conditions/${condition.slug}`}
                className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-fade-up block"
              >
                <div className="stroke-[var(--color-primary)]">
                  {condition.icon}
                </div>
                <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mt-4">
                  {condition.name}
                </h3>
                <p className="text-[var(--color-muted)] text-sm mt-3 leading-relaxed">
                  {condition.description}
                </p>
                <div className="text-[var(--color-primary)] font-semibold text-sm mt-4 hover:underline">
                  Learn More →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-[var(--color-ink)] text-center mb-16">When to Seek Help</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {warningSigns.map((category, index) => (
              <div key={index} className="text-center animate-fade-up">
                <div className="stroke-[var(--color-primary)] inline-block mb-6">
                  {category.icon}
                </div>
                <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-4">
                  {category.title}
                </h3>
                <ul className="text-[var(--color-muted)] space-y-2">
                  {category.signs.map((sign, idx) => (
                    <li key={idx} className="text-sm">• {sign}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-4xl mx-auto border border-[var(--color-border)]">
            <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-4 text-center">
              Crisis Resources
            </h3>
            <p className="text-[var(--color-muted)] text-center mb-6">
              If you or someone you know is in crisis, help is available 24/7:
            </p>
            <div className="space-y-4 text-center">
              <div>
                <div className="font-semibold text-[var(--color-ink)]">988 Suicide & Crisis Lifeline</div>
                <div className="text-[var(--color-muted)] text-sm">Call or text 988 for immediate support</div>
              </div>
              <div>
                <div className="font-semibold text-[var(--color-ink)]">Crisis Text Line</div>
                <div className="text-[var(--color-muted)] text-sm">Text HOME to 741741</div>
              </div>
              <div className="text-sm text-[var(--color-muted)] mt-6">
                If you are experiencing a medical emergency, call 911 immediately.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-6">Ready to Begin Your Journey?</h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Contact our team to discuss your needs and learn how we can help you achieve lasting wellness.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-lg"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </main>
  )
}