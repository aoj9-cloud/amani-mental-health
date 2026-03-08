import { ServiceData } from "@/types";

export const services: ServiceData[] = [
  {
    slug: "depression",
    name: "Depression Treatment",
    shortDescription:
      "Evidence-based care for major depression, persistent depressive disorder, and seasonal affective disorder.",
    metaTitle: "Depression Treatment in Elizabeth, NJ | Amani Mental Health",
    metaDescription:
      "Struggling with depression? Amani Mental Health Clinic in Elizabeth, NJ offers personalized treatment. Serving Linden, Newark & Jersey City. Call now.",
    h1: "Depression Treatment & Therapy in Elizabeth, NJ",
    intro:
      "Depression is one of the most common and treatable mental health conditions, yet millions suffer in silence. At Amani Mental Health Clinic, our licensed therapists and psychiatrists provide compassionate, evidence-based depression treatment tailored to your unique needs. Whether you're experiencing persistent sadness, loss of interest in daily activities, or difficulty functioning at work or home, we're here to help you reclaim your life. Serving Elizabeth, Linden, Westfield, Clark, Newark, and Jersey City, we offer same-week appointments and accept most insurance plans.",
    symptoms: [
      "Persistent sadness or emptiness lasting more than two weeks",
      "Loss of interest in activities you once enjoyed",
      "Significant changes in appetite or weight",
      "Sleep disturbances — insomnia or sleeping too much",
      "Fatigue and low energy throughout the day",
      "Difficulty concentrating, remembering, or making decisions",
      "Feelings of worthlessness or excessive guilt",
      "Recurrent thoughts of death or suicidal ideation",
    ],
    treatmentApproach:
      "Our depression treatment integrates Cognitive Behavioral Therapy (CBT), which helps identify and reframe negative thought patterns, with Interpersonal Therapy (IPT) to improve relationships and communication. For moderate to severe depression, we offer medication management in coordination with your primary care provider. We also incorporate mindfulness-based approaches, behavioral activation, and psychoeducation to build lasting resilience. Treatment plans are individualized — we don't believe in one-size-fits-all care.",
    whyChooseUs:
      "Amani Mental Health Clinic's team includes licensed clinical social workers (LCSWs), licensed professional counselors (LPCs), and board-certified psychiatrists with decades of combined experience treating depression across Union and Essex County. We offer evening and weekend appointments, telehealth options, and a welcoming, judgment-free environment where healing is possible.",
    icon: "☁",
    relatedSlugs: ["anxiety", "sleep-insomnia", "grief"],
    crisisDisclaimer: true,
  },
  {
    slug: "anxiety",
    name: "Anxiety Treatment",
    shortDescription:
      "Specialized therapy for generalized anxiety, panic disorder, social anxiety, and phobias.",
    metaTitle: "Anxiety Treatment in Elizabeth, NJ | Amani Mental Health",
    metaDescription:
      "Expert anxiety therapy in Elizabeth, NJ. Treating generalized anxiety, panic attacks & social anxiety. Accepting new patients in Union & Essex County.",
    h1: "Anxiety Treatment & Therapy in Elizabeth, NJ",
    intro:
      "Anxiety is the most prevalent mental health condition in the United States, affecting over 40 million adults. While anxiety is a normal response to stress, when it becomes persistent, overwhelming, or interferes with your daily life, professional support makes all the difference. At Amani Mental Health Clinic in Elizabeth, NJ, our specialists treat generalized anxiety disorder (GAD), panic disorder, social anxiety disorder, specific phobias, and health anxiety. We serve residents across Union County including Linden, Westfield, Clark, as well as Newark and Jersey City.",
    symptoms: [
      "Excessive worry or fear that is difficult to control",
      "Racing heart, shortness of breath, or chest tightness",
      "Panic attacks — sudden, intense episodes of fear",
      "Avoidance of social situations or places that trigger fear",
      "Restlessness, feeling on edge, or inability to relax",
      "Muscle tension, headaches, or stomachaches",
      "Sleep problems driven by racing thoughts",
      "Difficulty concentrating due to intrusive worries",
    ],
    treatmentApproach:
      "Our anxiety treatment combines Cognitive Behavioral Therapy (CBT) — the gold standard — with exposure and response prevention (ERP) for phobias and OCD-related anxiety. We use Acceptance and Commitment Therapy (ACT) to help clients build psychological flexibility, and mindfulness-based stress reduction (MBSR) for daily anxiety management. For clients with severe panic disorder or treatment-resistant anxiety, our psychiatric team offers carefully monitored medication support.",
    whyChooseUs:
      "Our clinicians understand that anxiety manifests differently for everyone — and that the immigrant communities and working families we serve in Elizabeth and the surrounding areas face unique stressors. We offer culturally sensitive, bilingual support and flexible scheduling around work and family commitments.",
    icon: "◇",
    relatedSlugs: ["depression", "ocd", "sleep-insomnia"],
    crisisDisclaimer: false,
  },
  {
    slug: "bipolar-disorder",
    name: "Bipolar Disorder Treatment",
    shortDescription:
      "Comprehensive management for Bipolar I, Bipolar II, and cyclothymia through therapy and medication.",
    metaTitle: "Bipolar Disorder Treatment in Elizabeth, NJ | Amani Mental Health",
    metaDescription:
      "Bipolar disorder treatment in Elizabeth, NJ. Evidence-based therapy & medication management for Bipolar I, II & cyclothymia. Serving Union & Essex County.",
    h1: "Bipolar Disorder Treatment in Elizabeth, NJ",
    intro:
      "Bipolar disorder is a complex mood condition characterized by dramatic swings between periods of mania or hypomania and depression. Without proper treatment, these cycles can disrupt relationships, careers, and overall wellbeing. At Amani Mental Health Clinic, our psychiatrists and therapists collaborate to provide comprehensive bipolar disorder management in Elizabeth, NJ. We treat Bipolar I, Bipolar II, and cyclothymic disorder using an integrated approach that combines psychotherapy, medication management, and lifestyle interventions.",
    symptoms: [
      "Episodes of unusually elevated, expansive, or irritable mood (mania)",
      "Decreased need for sleep without feeling tired during manic phases",
      "Racing thoughts, rapid speech, and inflated self-esteem",
      "Impulsive or risky behavior during manic episodes",
      "Depressive episodes with profound sadness and hopelessness",
      "Difficulty maintaining consistent work and relationship functioning",
      "Cycling between emotional highs and lows over weeks or months",
      "Mixed states with simultaneous manic and depressive symptoms",
    ],
    treatmentApproach:
      "Effective bipolar disorder treatment requires a long-term, structured approach. Our team provides mood stabilizer and second-generation antipsychotic management, combined with Interpersonal and Social Rhythm Therapy (IPSRT) — the leading psychotherapy for bipolar disorder. We also offer family-focused therapy to improve communication and reduce relapse rates, psychoeducation about mood triggers, and collaborative safety planning for high-risk periods.",
    whyChooseUs:
      "Amani's integrated psychiatric and therapy team means you receive coordinated care under one roof. We prioritize medication reviews, proactive mood monitoring, and strong therapeutic alliances to help you achieve the stability needed to live a full and meaningful life.",
    icon: "◎",
    relatedSlugs: ["depression", "mood-disorders", "psychosis"],
    crisisDisclaimer: false,
  },
  {
    slug: "adhd",
    name: "ADHD Treatment",
    shortDescription:
      "Evaluation and treatment for ADHD in adults and adolescents, including therapy and medication management.",
    metaTitle: "ADHD Treatment in Elizabeth, NJ | Amani Mental Health Clinic",
    metaDescription:
      "ADHD evaluation & treatment in Elizabeth, NJ. Expert care for adults & adolescents. Therapy & medication management. Serving Linden, Newark & Union County.",
    h1: "ADHD Evaluation & Treatment in Elizabeth, NJ",
    intro:
      "Attention-Deficit/Hyperactivity Disorder (ADHD) is a neurodevelopmental condition that affects focus, impulse control, and executive functioning in both children and adults. Many adults with ADHD were never diagnosed in childhood and spend years struggling with underperformance, relationship difficulties, and low self-esteem before finding answers. At Amani Mental Health Clinic in Elizabeth, NJ, we provide thorough ADHD evaluations and individualized treatment plans for adolescents and adults across Union County and the greater New Jersey area.",
    symptoms: [
      "Chronic difficulty sustaining attention on tasks or conversations",
      "Frequent careless mistakes and trouble with detail-oriented work",
      "Disorganization and difficulty managing time",
      "Losing important items repeatedly (keys, phone, documents)",
      "Hyperactivity — restlessness, difficulty sitting still",
      "Impulsivity — interrupting, making hasty decisions",
      "Starting many tasks but rarely completing them",
      "Emotional dysregulation — quick frustration or mood swings",
    ],
    treatmentApproach:
      "Our ADHD treatment begins with a comprehensive clinical evaluation to establish an accurate diagnosis. Treatment typically combines stimulant or non-stimulant medication management with cognitive-behavioral therapy adapted for ADHD (CBT-A). We teach practical executive functioning skills, organizational strategies, and emotional regulation techniques. For families and couples, we offer psychoeducation sessions to help loved ones understand and support ADHD.",
    whyChooseUs:
      "Our clinicians have specialized training in adult ADHD, a population often overlooked in traditional mental health settings. We work closely with primary care providers, schools, and employers when appropriate, providing documentation and accommodations letters to support our patients' full participation in life.",
    icon: "⊕",
    relatedSlugs: ["anxiety", "mood-disorders", "sleep-insomnia"],
    crisisDisclaimer: false,
  },
  {
    slug: "trauma-ptsd",
    name: "Trauma & PTSD Treatment",
    shortDescription:
      "Specialized trauma-informed care and PTSD therapy using EMDR, CPT, and somatic approaches.",
    metaTitle: "Trauma & PTSD Treatment in Elizabeth, NJ | Amani Mental Health",
    metaDescription:
      "PTSD & trauma therapy in Elizabeth, NJ. EMDR, CPT & trauma-informed care. Compassionate support for survivors. Serving Union & Essex County, NJ.",
    h1: "Trauma & PTSD Therapy in Elizabeth, NJ",
    intro:
      "Trauma leaves invisible wounds that shape how we see ourselves, others, and the world. Post-Traumatic Stress Disorder (PTSD) can develop after experiencing or witnessing a life-threatening event, abuse, accident, violence, or other deeply distressing experiences. At Amani Mental Health Clinic in Elizabeth, NJ, our trauma-specialized therapists provide evidence-based treatment in a safe, trauma-informed environment. We understand that healing from trauma takes time, trust, and the right therapeutic approach — and we walk beside our clients every step of the way.",
    symptoms: [
      "Intrusive memories, flashbacks, or nightmares related to the trauma",
      "Emotional numbing or feeling detached from others",
      "Hypervigilance — constantly scanning for danger",
      "Avoidance of reminders, places, or conversations related to the trauma",
      "Negative beliefs about yourself or the world after the trauma",
      "Irritability, angry outbursts, or difficulty concentrating",
      "Persistent feelings of shame, guilt, or horror",
      "Sleep disruption due to nightmares or anxiety",
    ],
    treatmentApproach:
      "Our trauma treatment protocols include Eye Movement Desensitization and Reprocessing (EMDR), one of the most researched and effective trauma therapies available, as well as Cognitive Processing Therapy (CPT) to address trauma-related thought distortions. We integrate somatic approaches that help the body release trauma stored physically, and Trauma-Focused CBT (TF-CBT) for adolescents. All care is delivered within a trauma-informed framework that prioritizes safety, choice, and collaboration.",
    whyChooseUs:
      "Amani's therapists have extensive experience working with survivors of complex trauma, domestic violence, community violence, immigration trauma, and childhood abuse. We serve Elizabeth's diverse communities with cultural humility and a commitment to making mental health care accessible to all.",
    icon: "❧",
    relatedSlugs: ["anxiety", "depression", "grief"],
    crisisDisclaimer: true,
  },
  {
    slug: "grief",
    name: "Grief & Loss Counseling",
    shortDescription:
      "Compassionate grief counseling for bereavement, complicated grief, and life transitions.",
    metaTitle: "Grief Counseling in Elizabeth, NJ | Amani Mental Health Clinic",
    metaDescription:
      "Grief & bereavement counseling in Elizabeth, NJ. Compassionate support for loss, complicated grief & major life transitions. Accepting new patients.",
    h1: "Grief & Loss Counseling in Elizabeth, NJ",
    intro:
      "Grief is a natural human response to loss — but that doesn't make it easy. Whether you've lost a loved one, a relationship, a job, or a sense of identity, grief can feel isolating and overwhelming. At Amani Mental Health Clinic, our grief counselors provide a warm, non-judgmental space to process loss and find a path forward. We serve residents throughout Elizabeth, Linden, Westfield, and surrounding New Jersey communities who are navigating bereavement, complicated grief, or the emotional weight of significant life changes.",
    symptoms: [
      "Intense sadness, longing, or yearning for the person or thing lost",
      "Difficulty accepting the reality of the loss",
      "Feeling like life is meaningless or purposeless without what was lost",
      "Social withdrawal and isolation from friends and family",
      "Bitterness, anger, or resentment related to the loss",
      "Difficulty engaging in normal daily activities",
      "Feeling emotionally numb or detached",
      "Complicated grief — intense symptoms lasting more than a year",
    ],
    treatmentApproach:
      "Our grief counseling draws from the Complicated Grief Treatment (CGT) protocol, narrative therapy, and meaning-making frameworks to help clients process their loss, honor their grief, and gradually reengage with life. We respect the nonlinear nature of grief and work at your pace. For those experiencing complicated or prolonged grief disorder (PGD), we offer structured, evidence-based intervention.",
    whyChooseUs:
      "Loss affects people differently across cultures and communities. Our clinicians approach grief with cultural sensitivity, recognizing diverse mourning traditions and community contexts. We offer individual and group grief support and welcome clients of all religious and spiritual backgrounds.",
    icon: "✦",
    relatedSlugs: ["depression", "trauma-ptsd", "anxiety"],
    crisisDisclaimer: false,
  },
  {
    slug: "mood-disorders",
    name: "Mood Disorders Treatment",
    shortDescription:
      "Specialized care for persistent mood dysregulation including dysthymia, DMDD, and premenstrual dysphoric disorder.",
    metaTitle: "Mood Disorders Treatment in Elizabeth, NJ | Amani Mental Health",
    metaDescription:
      "Expert mood disorder treatment in Elizabeth, NJ. Dysthymia, PMDD, DMDD & more. Evidence-based therapy & medication management. Call today.",
    h1: "Mood Disorders Treatment in Elizabeth, NJ",
    intro:
      "Mood disorders encompass a broad range of conditions that affect emotional regulation, energy, and daily functioning. Beyond depression and bipolar disorder, conditions like dysthymia (persistent depressive disorder), disruptive mood dysregulation disorder (DMDD), and premenstrual dysphoric disorder (PMDD) significantly impact quality of life. At Amani Mental Health Clinic in Elizabeth, NJ, our specialists provide accurate diagnosis and individualized treatment for the full spectrum of mood disorders, helping our patients achieve lasting emotional stability.",
    symptoms: [
      "Persistent low mood lasting months or years (dysthymia)",
      "Severe irritability and anger outbursts disproportionate to triggers",
      "Difficulty maintaining emotional stability across settings",
      "Cycling emotional states that disrupt relationships and work",
      "Severe premenstrual mood changes (PMDD)",
      "Chronic feelings of hopelessness without a clear cause",
      "Difficulty experiencing positive emotions (anhedonia)",
      "Fatigue and diminished motivation persisting over time",
    ],
    treatmentApproach:
      "Treatment for mood disorders at Amani is tailored to the specific diagnosis and the individual. We use DBT (Dialectical Behavior Therapy) skills training for emotional regulation, CBT for cognitive distortions, and Interpersonal Therapy (IPT) for relationship-related mood triggers. Our psychiatric team provides careful medication evaluation including mood stabilizers, antidepressants, and hormonal interventions for PMDD when clinically appropriate.",
    whyChooseUs:
      "Many mood disorders go undiagnosed or are misdiagnosed for years. Our clinicians conduct thorough biopsychosocial evaluations to arrive at accurate diagnoses, and we involve clients as active partners in their treatment planning — because you know yourself best.",
    icon: "〜",
    relatedSlugs: ["depression", "bipolar-disorder", "adhd"],
    crisisDisclaimer: false,
  },
  {
    slug: "sleep-insomnia",
    name: "Sleep & Insomnia Treatment",
    shortDescription:
      "Evidence-based CBT-I and behavioral sleep medicine for chronic insomnia and sleep disorders.",
    metaTitle: "Insomnia & Sleep Therapy in Elizabeth, NJ | Amani Mental Health",
    metaDescription:
      "Sleep & insomnia therapy in Elizabeth, NJ. CBT for Insomnia (CBT-I) from licensed therapists. Drug-free, evidence-based approach. Call for an appointment.",
    h1: "Sleep Disorder & Insomnia Treatment in Elizabeth, NJ",
    intro:
      "Poor sleep affects everything — mood, cognition, physical health, and relationships. Chronic insomnia, defined as difficulty falling or staying asleep at least three nights per week for three or more months, is both a standalone condition and a symptom of many mental health disorders. At Amani Mental Health Clinic in Elizabeth, NJ, we offer Cognitive Behavioral Therapy for Insomnia (CBT-I), the gold-standard, non-medication treatment for chronic sleep problems — proven more effective than sleeping pills over the long term.",
    symptoms: [
      "Difficulty falling asleep despite fatigue",
      "Waking frequently through the night",
      "Early morning awakening and inability to return to sleep",
      "Non-restorative sleep — feeling unrefreshed despite hours in bed",
      "Daytime fatigue, irritability, or cognitive impairment",
      "Worrying about sleep and dreading bedtime",
      "Relying on alcohol or medication to fall asleep",
      "Sleep problems that have persisted for months or years",
    ],
    treatmentApproach:
      "CBT-I is an eight-session structured program that addresses the thoughts and behaviors maintaining chronic insomnia. It includes sleep restriction therapy, stimulus control, sleep hygiene education, cognitive restructuring of sleep-related thoughts, and relaxation techniques. Unlike sleep medications, CBT-I produces lasting results without dependence or side effects. For patients with co-occurring mental health conditions, we integrate sleep treatment with their overall care plan.",
    whyChooseUs:
      "Our CBT-I certified therapists understand that sleep problems rarely exist in isolation. We treat the whole person — addressing the anxiety, depression, trauma, or chronic pain that often underlies insomnia — for comprehensive, lasting improvement.",
    icon: "◐",
    relatedSlugs: ["anxiety", "depression", "trauma-ptsd"],
    crisisDisclaimer: false,
  },
  {
    slug: "personality-disorders",
    name: "Personality Disorders Treatment",
    shortDescription:
      "Specialized DBT and schema therapy for personality disorders including BPD, NPD, and avoidant PD.",
    metaTitle: "Personality Disorder Treatment in Elizabeth, NJ | Amani Mental Health",
    metaDescription:
      "Personality disorder therapy in Elizabeth, NJ. DBT & schema therapy for BPD, avoidant PD & more. Compassionate, evidence-based care. Call today.",
    h1: "Personality Disorder Treatment in Elizabeth, NJ",
    intro:
      "Personality disorders are enduring patterns of inner experience and behavior that deviate significantly from cultural expectations, causing distress and functional impairment. The DSM-5 recognizes ten personality disorders across three clusters. While these conditions are complex and often misunderstood, research clearly demonstrates that they are treatable — and many people achieve significant improvement with the right therapeutic support. At Amani Mental Health Clinic, we specialize in evidence-based personality disorder treatment for adults in Elizabeth, NJ and throughout Union and Essex County.",
    symptoms: [
      "Persistent unstable self-image and sense of identity",
      "Extreme emotional reactions and difficulty self-regulating",
      "Unstable, intense interpersonal relationships",
      "Chronic feelings of emptiness or worthlessness",
      "Rigid, inflexible thinking and behavioral patterns",
      "Significant impairment in work, relationships, or daily functioning",
      "Interpersonal difficulties that repeat across contexts",
      "Pattern of thinking, feeling, or behaving that causes ongoing distress",
    ],
    treatmentApproach:
      "Dialectical Behavior Therapy (DBT) — developed specifically for borderline personality disorder — is our primary treatment modality, incorporating skills training in mindfulness, distress tolerance, emotional regulation, and interpersonal effectiveness. We also offer Schema Therapy to address deep-seated maladaptive patterns, and mentalization-based treatment (MBT) to improve emotional understanding. Treatment is delivered individually and in structured skills groups.",
    whyChooseUs:
      "Personality disorder treatment requires expertise, consistency, and a strong therapeutic relationship. Our clinicians are specifically trained in DBT and approach clients with curiosity and compassion — without the stigma that often characterizes these diagnoses in traditional settings.",
    icon: "⬡",
    relatedSlugs: ["bpd", "depression", "trauma-ptsd"],
    crisisDisclaimer: false,
  },
  {
    slug: "ocd",
    name: "OCD Treatment",
    shortDescription:
      "Specialized ERP therapy for obsessive-compulsive disorder and related conditions.",
    metaTitle: "OCD Treatment in Elizabeth, NJ | Amani Mental Health Clinic",
    metaDescription:
      "Expert OCD treatment in Elizabeth, NJ. Exposure & Response Prevention (ERP) from OCD specialists. Serving Union & Essex County. Same-week appointments.",
    h1: "OCD Treatment & ERP Therapy in Elizabeth, NJ",
    intro:
      "Obsessive-Compulsive Disorder (OCD) is a serious mental health condition characterized by unwanted, intrusive thoughts (obsessions) and repetitive behaviors or mental acts performed to reduce anxiety (compulsions). OCD affects approximately 1 in 40 adults and 1 in 100 children in the United States. Without proper treatment, OCD can consume hours of a person's day and severely limit functioning. At Amani Mental Health Clinic, our OCD specialists provide Exposure and Response Prevention (ERP) — the most effective evidence-based treatment for OCD — to residents throughout Elizabeth, NJ and surrounding communities.",
    symptoms: [
      "Persistent intrusive thoughts about contamination, harm, symmetry, or taboo topics",
      "Excessive handwashing, cleaning, or checking behaviors",
      "Arranging objects in precise ways to reduce distress",
      "Mental compulsions — counting, praying, or reviewing",
      "Reassurance-seeking from others to reduce obsession-related anxiety",
      "Significant time lost to obsessions and compulsions (1+ hours/day)",
      "Avoidance of situations that trigger obsessional content",
      "Distress, shame, or guilt related to intrusive thoughts",
    ],
    treatmentApproach:
      "Exposure and Response Prevention (ERP) is a structured behavioral therapy in which clients gradually confront feared situations or thoughts (exposures) while refraining from compulsive responses — allowing anxiety to naturally decrease and breaking the OCD cycle. Our therapists are trained in the NOCD protocol and IOCDF recommended guidelines. We also offer Inference-Based CBT (I-CBT) for Pure-O OCD and related conditions like health anxiety and body dysmorphic disorder (BDD).",
    whyChooseUs:
      "Many therapists claim to treat OCD with CBT — but ERP requires specific training. Our OCD specialists have completed intensive training in ERP delivery and stay current with the latest research through the International OCD Foundation's training programs. We treat OCD, and we treat it correctly.",
    icon: "⊗",
    relatedSlugs: ["anxiety", "bpd", "personality-disorders"],
    crisisDisclaimer: false,
  },
  {
    slug: "bpd",
    name: "BPD Treatment",
    shortDescription:
      "Comprehensive DBT-based treatment for Borderline Personality Disorder.",
    metaTitle: "BPD Treatment in Elizabeth, NJ | Amani Mental Health Clinic",
    metaDescription:
      "Borderline Personality Disorder treatment in Elizabeth, NJ. Comprehensive DBT program for BPD. Compassionate care in a judgment-free environment. Call now.",
    h1: "Borderline Personality Disorder (BPD) Treatment in Elizabeth, NJ",
    intro:
      "Borderline Personality Disorder (BPD) is characterized by intense emotional experiences, unstable relationships, impulsive behaviors, and a fragmented sense of self. Living with BPD can feel like riding an emotional rollercoaster with no off switch — exhausting for the person with BPD and those who love them. At Amani Mental Health Clinic in Elizabeth, NJ, we offer compassionate, specialized BPD treatment grounded in Dialectical Behavior Therapy (DBT), the gold-standard treatment developed specifically for BPD by Dr. Marsha Linehan.",
    symptoms: [
      "Intense fear of abandonment — real or imagined",
      "Unstable, intense relationships that oscillate between idealization and devaluation",
      "Unstable self-image or sense of identity",
      "Impulsive, self-destructive behaviors (spending, substances, risky sex)",
      "Self-harm or suicidal ideation or behaviors",
      "Extreme emotional reactions that are difficult to manage",
      "Chronic feelings of emptiness",
      "Dissociation or paranoid ideation under stress",
    ],
    treatmentApproach:
      "Our comprehensive DBT program includes weekly individual therapy, weekly DBT skills training group, phone coaching for skills generalization, and therapist consultation. The four DBT skill modules — mindfulness, distress tolerance, emotional regulation, and interpersonal effectiveness — provide a concrete toolkit for managing the intense experiences of BPD. We also offer DBT-PE (Prolonged Exposure) for clients with co-occurring PTSD.",
    whyChooseUs:
      "BPD requires a specialist. Our therapists have received advanced DBT training and approach BPD without the stigma that too often follows this diagnosis. We believe people with BPD are doing the best they can with the skills they have — and our job is to help them build better skills.",
    icon: "✿",
    relatedSlugs: ["personality-disorders", "depression", "trauma-ptsd"],
    crisisDisclaimer: true,
  },
  {
    slug: "odd",
    name: "ODD Treatment",
    shortDescription:
      "Family-based treatment for Oppositional Defiant Disorder in children and adolescents.",
    metaTitle: "ODD Treatment in Elizabeth, NJ | Amani Mental Health Clinic",
    metaDescription:
      "Oppositional Defiant Disorder treatment in Elizabeth, NJ. Expert child & adolescent therapy for ODD. Parent training & family-based approaches. Call today.",
    h1: "Oppositional Defiant Disorder (ODD) Treatment in Elizabeth, NJ",
    intro:
      "Oppositional Defiant Disorder (ODD) is characterized by a persistent pattern of angry/irritable mood, argumentative/defiant behavior, and vindictiveness in children and adolescents. ODD goes beyond typical childhood defiance — it significantly impacts family dynamics, school performance, and peer relationships. At Amani Mental Health Clinic, we work with families throughout Elizabeth, NJ to provide evidence-based ODD treatment that addresses the underlying emotional needs driving defiant behavior while building parents' confidence and skills.",
    symptoms: [
      "Frequently losing temper and having angry, resentful outbursts",
      "Persistently arguing with adults and authority figures",
      "Actively defying or refusing to comply with rules and requests",
      "Deliberately annoying others or blaming others for mistakes",
      "Vindictive behavior at least twice in the past six months",
      "Symptoms present in multiple settings (home, school, community)",
      "Significant impact on academic or social functioning",
      "Symptoms lasting at least six months",
    ],
    treatmentApproach:
      "Our ODD treatment includes Parent Management Training (PMT) — teaching parents evidence-based strategies for responding to defiant behavior — combined with individual therapy for the child addressing anger management, emotional regulation, and social skills. We use Collaborative Problem Solving (CPS), a research-supported approach that treats ODD as a deficit in flexibility and frustration tolerance rather than willful misconduct. Family therapy helps improve overall communication and relationship dynamics.",
    whyChooseUs:
      "We work with the whole family, not just the child. Our child and adolescent specialists collaborate with schools when helpful and provide parent coaching throughout treatment to ensure skills transfer to the home environment.",
    icon: "◈",
    relatedSlugs: ["adhd", "mood-disorders", "anxiety"],
    crisisDisclaimer: false,
  },
  {
    slug: "substance-use",
    name: "Substance Use Treatment",
    shortDescription:
      "Integrated co-occurring disorders treatment for substance use and mental health conditions.",
    metaTitle: "Substance Use Treatment in Elizabeth, NJ | Amani Mental Health",
    metaDescription:
      "Substance use & addiction treatment in Elizabeth, NJ. Integrated co-occurring disorders care. Motivational interviewing & CBT. Serving Union & Essex County.",
    h1: "Substance Use & Co-Occurring Disorders Treatment in Elizabeth, NJ",
    intro:
      "Substance use disorders and mental health conditions frequently co-occur — often called a dual diagnosis. Depression drives drinking, alcohol worsens anxiety, trauma fuels substance use. At Amani Mental Health Clinic in Elizabeth, NJ, we provide integrated treatment for co-occurring substance use and mental health disorders, recognizing that lasting recovery requires addressing both simultaneously. Our outpatient program serves adults and adolescents struggling with alcohol, cannabis, opioid, stimulant, and other substance use disorders throughout Union and Essex County.",
    symptoms: [
      "Using substances more than intended or for longer than planned",
      "Persistent desire or unsuccessful attempts to cut down",
      "Spending significant time obtaining, using, or recovering from substances",
      "Craving or strong urge to use substances",
      "Failing to fulfill major role obligations due to substance use",
      "Continuing use despite social or interpersonal problems it causes",
      "Giving up important activities due to substance use",
      "Tolerance — needing more for the same effect",
    ],
    treatmentApproach:
      "Our substance use treatment combines Motivational Interviewing (MI) to build intrinsic motivation for change, Cognitive Behavioral Therapy (CBT) targeting substance-use triggers and coping strategies, and Contingency Management (CM) to reinforce sobriety. For clients with opioid use disorder, we work alongside prescribing providers for Medication-Assisted Treatment (MAT) coordination. Relapse prevention planning and peer support connections are integral to our approach.",
    whyChooseUs:
      "Recovery is nonlinear, and we meet clients where they are — whether in contemplation, active reduction, or sustained recovery. We take a harm reduction stance and never shame clients for relapse. Our integrated approach treats the whole person, not just the substance.",
    icon: "◌",
    relatedSlugs: ["depression", "anxiety", "trauma-ptsd"],
    crisisDisclaimer: true,
  },
  {
    slug: "psychosis",
    name: "Psychosis Treatment",
    shortDescription:
      "Early intervention and ongoing support for psychotic disorders including schizophrenia and schizoaffective disorder.",
    metaTitle: "Psychosis Treatment in Elizabeth, NJ | Amani Mental Health Clinic",
    metaDescription:
      "Psychosis & schizophrenia treatment in Elizabeth, NJ. Early intervention, medication management & therapy. Compassionate psychiatric care. Call now.",
    h1: "Psychosis & Schizophrenia Treatment in Elizabeth, NJ",
    intro:
      "Psychotic disorders, including schizophrenia, schizoaffective disorder, brief psychotic disorder, and substance-induced psychosis, involve a disconnection from reality that can be profoundly frightening for individuals and families. Early intervention dramatically improves long-term outcomes. At Amani Mental Health Clinic in Elizabeth, NJ, our psychiatric team provides compassionate, evidence-based psychosis treatment integrating medication management, coordinated specialty care, and family education to support recovery and community integration.",
    symptoms: [
      "Hallucinations — hearing voices or seeing things others do not",
      "Delusions — fixed false beliefs that resist reason",
      "Disorganized thinking or speech",
      "Grossly disorganized or catatonic behavior",
      "Negative symptoms — flat affect, avolition, alogia, anhedonia",
      "Significant decline in occupational or social functioning",
      "Social withdrawal and self-care difficulties",
      "Agitation, paranoia, or extreme suspiciousness",
    ],
    treatmentApproach:
      "Our psychosis treatment follows Coordinated Specialty Care (CSC) principles for first-episode psychosis, including medication management, individual resilience-building therapy (CBT-p), family psychoeducation using the NAVIGATE model, supported employment and education, and case management. For ongoing schizophrenia, we provide long-term psychiatric support, social skills training, and relapse prevention planning.",
    whyChooseUs:
      "Our psychiatric team has specialized experience in psychotic disorder management and works closely with community mental health resources to provide comprehensive support beyond the clinic walls. We believe recovery is possible — and we define recovery as living a meaningful life, not just symptom elimination.",
    icon: "◬",
    relatedSlugs: ["bipolar-disorder", "mood-disorders", "substance-use"],
    crisisDisclaimer: true,
  },
  {
    slug: "couples-counseling",
    name: "Couples Counseling",
    shortDescription:
      "Evidence-based couples therapy to rebuild communication, trust, and intimacy.",
    metaTitle: "Couples Counseling in Elizabeth, NJ | Amani Mental Health Clinic",
    metaDescription:
      "Couples therapy & marriage counseling in Elizabeth, NJ. Gottman Method & EFT to rebuild connection. Serving Union & Essex County. Call for an appointment.",
    h1: "Couples Counseling & Marriage Therapy in Elizabeth, NJ",
    intro:
      "Every relationship faces challenges — communication breakdowns, conflict escalation, breach of trust, life stressors, parenting struggles, or intimacy difficulties. Couples counseling provides a structured, facilitated space to rebuild connection and develop healthier relationship patterns. At Amani Mental Health Clinic in Elizabeth, NJ, our trained couples therapists use the Gottman Method and Emotionally Focused Therapy (EFT) — the two most research-validated couples therapy approaches — to help partners reconnect, communicate effectively, and build lasting relationship resilience.",
    symptoms: [
      "Frequent arguments that escalate or go unresolved",
      "Feeling emotionally disconnected or like strangers",
      "Communication breakdown — criticism, contempt, defensiveness, stonewalling",
      "Difficulty recovering from an affair or breach of trust",
      "Disagreements about parenting, finances, or life direction",
      "Intimacy or sexual difficulties affecting the relationship",
      "Considering separation or divorce",
      "Life transitions creating relationship strain (new baby, job loss, relocation)",
    ],
    treatmentApproach:
      "Gottman Method Couples Therapy uses research-based interventions to reduce conflict, increase friendship and intimacy, and create shared meaning. Emotionally Focused Therapy (EFT) helps partners identify and shift underlying emotional patterns driving conflict and disconnection. We offer structured assessment sessions before beginning treatment to understand each partner's perspective and relationship history.",
    whyChooseUs:
      "Our couples therapists hold Gottman Level certifications and have clinical experience with diverse couples including intercultural partnerships, LGBTQ+ couples, and families navigating immigration stressors. We create a balanced, neutral therapeutic space where both partners feel heard.",
    icon: "♡",
    relatedSlugs: ["depression", "anxiety", "grief"],
    crisisDisclaimer: false,
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}
