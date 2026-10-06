// NOURISH Platform Comprehensive Data Store
// Combines Cronometer's nutrient precision with Noom's behavioral recovery science

const NOURISH_DATA = {
  // Signature Recovery Modes
  recoveryModes: {
    workout: {
      id: 'workout',
      title: 'Workout & Muscle Hyper-Recovery',
      subtitle: 'Fast-track glycogen replenishment, reduce DOMS, and trigger muscle protein synthesis.',
      badge: '💪 Post-Workout Engine',
      accentColor: '#C85A32',
      heroTagline: 'Rapid Anabolic & Myofibrillar Repair',
      hydrationTarget: '2,800 ml (Electrolyte + Sodium Balanced)',
      recommendedMealId: 'meal-1',
      keyNutrients: ['45g Leucine-Rich Protein', '75g Rapid Glycogen Carbs', '420mg Magnesium Bisglycinate', '1,200mg Omega-3 (EPA/DHA)'],
      restProtocol: '20-min elevation + pneumatic compression or light active stroll + 450ml cold electrolyte infusion.',
      advice: 'Consume high-bioavailability protein within 45 minutes of mechanical strain to maximize mTOR phosphorylation.',
      recommendedMeals: ['meal-1', 'meal-4', 'meal-7', 'meal-12'],
      recommendedGuide: 'guide-1'
    },
    sleep: {
      id: 'sleep',
      title: 'Deep Sleep & CNS Recovery',
      subtitle: 'Calm the central nervous system, lower evening cortisol, and boost delta slow-wave sleep.',
      badge: '😴 Circadian & CNS Reset',
      accentColor: '#421C38',
      heroTagline: 'Neurotransmitter Calming & Nightly Cellular Repair',
      hydrationTarget: '2,100 ml (Taper off 2 hrs before bed)',
      recommendedMealId: 'meal-2',
      keyNutrients: ['500mg L-Tryptophan', '400mg Magnesium Glycinate', '80mg Vitamin B6 (P5P)', 'Phytomelatonin Extracts'],
      restProtocol: 'Dim ambient lights to warm 2200K, 10-min 4-7-8 parasympathetic breathwork, no screens 60m pre-bed.',
      advice: 'Pair tart cherry with a modest slow-digesting protein (casein or pumpkin seed) to sustain nightly tissue regeneration.',
      recommendedMeals: ['meal-2', 'meal-5', 'meal-9', 'meal-14'],
      recommendedGuide: 'guide-2'
    },
    energy: {
      id: 'energy',
      title: 'Mitochondrial Energy Recharge',
      subtitle: 'Combat systemic mental fatigue, stabilize blood glucose, and elevate cellular ATP production.',
      badge: '⚡ Clean Cellular Energy',
      accentColor: '#D97706',
      heroTagline: 'Mitochondrial Biogenesis & Stable Glucose Curve',
      hydrationTarget: '3,000 ml (Citrus + Himalayan Pink Salt)',
      recommendedMealId: 'meal-3',
      keyNutrients: ['100mg CoQ10 & PQQ', 'Co-enzymated B-Complex', '65g Low-Glycemic Complex Carbs', 'Medium Chain Triglycerides (MCT)'],
      restProtocol: '10-min morning outdoor sunlight exposure (lux > 10,000) + 5-min cold rinse + mitochondrial brisk walk.',
      advice: 'Avoid high-glycemic spikes which trigger reactive hypoglycemia. Opt for polyphenol-dense whole plant matrices.',
      recommendedMeals: ['meal-3', 'meal-6', 'meal-8', 'meal-15'],
      recommendedGuide: 'guide-3'
    },
    rest: {
      id: 'rest',
      title: 'Active Rest Day & Joint Shield',
      subtitle: 'Soothe systemic inflammation, nourish connective tendons, and clear metabolic waste.',
      badge: '🧘 Rest & Regeneration',
      accentColor: '#2E6F58',
      heroTagline: 'Connective Tissue Nourishment & Anti-Inflammatory Flow',
      hydrationTarget: '2,500 ml (Infused with Cucumber, Mint & Ginger)',
      recommendedMealId: 'meal-4',
      keyNutrients: ['15g Hydrolyzed Collagen Peptides', '800mg Curcumin + Piperine', '120mg Vitamin C', 'Bromelain & Quercetin'],
      restProtocol: '25-min low-intensity Yin Yoga or infrared sauna session (65°C) to stimulate heat-shock proteins.',
      advice: 'Rest days are when your body physically adapts and builds resilience. Keep protein high and modulate carb density.',
      recommendedMeals: ['meal-4', 'meal-10', 'meal-13', 'meal-16'],
      recommendedGuide: 'guide-4'
    },
    hydration: {
      id: 'hydration',
      title: 'Cellular Osmolality & Electrolytes',
      subtitle: 'Restore intracellular fluid balance, flush lactate, and optimize neuromuscular signaling.',
      badge: '💧 Deep Hydration Protocol',
      accentColor: '#2563EB',
      heroTagline: 'Intracellular Potassium-Sodium Balance & Plasma Expansion',
      hydrationTarget: '3,500 ml (Trace mineral + coconut water matrix)',
      recommendedMealId: 'meal-5',
      keyNutrients: ['850mg Potassium', '500mg Bio-Sodium', '350mg Marine Magnesium', 'Electrolyte-rich Polyphenols'],
      restProtocol: 'Gentle hydration sipping every 20 minutes; combine with 10-min contrast shower for lymphatic drainage.',
      advice: 'Pure water alone can cause cellular hyponatremia during heavy exertion; always pair with essential trace electrolytes.',
      recommendedMeals: ['meal-5', 'meal-6', 'meal-11', 'meal-17'],
      recommendedGuide: 'guide-5'
    }
  },

  // Meals Database (20+ curated, Cronometer-precise recipes)
  meals: [
    {
      id: 'meal-1',
      title: 'Wild Salmon Quinoa Recovery Bowl with Turmeric Tahini',
      category: 'high-protein',
      recoveryType: 'workout',
      image: './images/image-2.png',
      prepTime: '22 mins',
      difficulty: 'Easy',
      calories: 580,
      protein: 48,
      carbs: 46,
      fat: 22,
      fiber: 9,
      recoveryScore: 98,
      antiInflammatoryIndex: 'Very High (+9.4)',
      summary: 'Wild Alaskan sockeye salmon over tricolor quinoa, massaged organic kale, roasted beets, and bio-available turmeric-tahini dressing.',
      recoveryPerks: [
        'High EPA/DHA Omega-3 for downregulating inflammatory cytokines (IL-6, TNF-alpha)',
        '48g complete amino acids containing 3.8g Leucine to activate mTOR muscle protein synthesis',
        'Complex low-GI quinoa starches for sustained muscular glycogen replenishment',
        'Betalains from roasted beets enhance nitric oxide synthesis and tissue blood flow'
      ],
      micronutrients: {
        magnesium: '185mg (46% DV)',
        potassium: '920mg (26% DV)',
        zinc: '4.2mg (38% DV)',
        vitaminD: '920 IU (115% DV)',
        omega3: '2,400mg',
        sodium: '410mg'
      },
      ingredients: [
        '200g Wild Alaskan Salmon fillet (skin on)',
        '3/4 cup cooked tricolor organic quinoa',
        '1 cup shredded baby kale',
        '1/2 cup roasted sliced ruby beets',
        '1/4 ripe Hass avocado, sliced',
        '1 tbsp raw pumpkin seeds (pepitas)',
        '1.5 tbsp Tahini dressing with cold-pressed turmeric, lemon & cracked black pepper',
        'Pinch of coarse pink Himalayan salt'
      ],
      instructions: [
        'Preheat a cast-iron skillet over medium-high heat. Season salmon with sea salt and cracked pepper.',
        'Place salmon skin-side down for 4-5 minutes until crispy and rendered, then flip for 2-3 minutes until medium rare.',
        'Warm the cooked quinoa and layer as the nutrient base in a wide ceramic bowl.',
        'Arrange massaged kale, roasted beets, avocado slices, and salmon fillet on top.',
        'Whisk tahini, lemon juice, turmeric, and warm water until velvety; drizzle generously and garnish with pumpkin seeds.'
      ],
      tags: ['High Protein', 'Anti-Inflammatory', 'Gluten-Free', 'Omega-3 Rich', 'Post-Workout']
    },
    {
      id: 'meal-2',
      title: 'Tart Cherry & Spiced Chia Golden Recovery Pudding',
      category: 'sleep',
      recoveryType: 'sleep',
      image: './images/image-3.png',
      prepTime: '10 mins',
      difficulty: 'Quick & Easy',
      calories: 340,
      protein: 26,
      carbs: 32,
      fat: 12,
      fiber: 11,
      recoveryScore: 96,
      antiInflammatoryIndex: 'Superior (+9.8)',
      summary: 'Cold-pressed Montmorency tart cherry compote layered over grass-fed collagen or pumpkin-seed chia pudding infused with Ceylon cinnamon.',
      recoveryPerks: [
        'Natural phytomelatonin & anthocyanins clinically proven to increase sleep duration by 39 minutes',
        '11g soluble prebiotic fiber stabilizing overnight blood sugar without nocturnal waking',
        'Rich in magnesium bisglycinate to downregulate GABA inhibitory neural pathways',
        'Ceylon cinnamon improves overnight insulin sensitivity and glycogen restoration'
      ],
      micronutrients: {
        magnesium: '240mg (60% DV)',
        potassium: '680mg (19% DV)',
        zinc: '3.1mg (28% DV)',
        vitaminD: '200 IU (25% DV)',
        omega3: '3,800mg (ALA)',
        sodium: '180mg'
      },
      ingredients: [
        '3 tbsp organic black chia seeds',
        '1 cup unsweetened almond or oat milk',
        '1 scoop grass-fed collagen peptides or sprouted plant protein',
        '1/3 cup Montmorency tart cherry concentrate (pure unsweetened)',
        '1/2 tsp ground organic Ceylon cinnamon',
        '1/4 tsp pure Madagascar vanilla extract',
        '1 tbsp crushed raw walnuts',
        '1 tsp raw clover honey (optional)'
      ],
      instructions: [
        'In a glass jar, vigorously whisk chia seeds, plant milk, protein powder, vanilla, and cinnamon.',
        'Refrigerate for at least 25 minutes (or prep ahead the night before) until thick pudding texture forms.',
        'Simmer tart cherry concentrate with a dash of honey for 2 minutes to make a luscious warm reduction.',
        'Spoon warm cherry compote over the cold chia pudding and top with chopped raw walnuts.'
      ],
      tags: ['Sleep Enhancer', 'Anti-Inflammatory', 'Dairy-Free', 'High Fiber', 'Evening Snack']
    },
    {
      id: 'meal-3',
      title: 'Mito-Charge Matcha Avocado Power Bowl with Tempeh',
      category: 'energy',
      recoveryType: 'energy',
      image: './images/image-4.png',
      prepTime: '18 mins',
      difficulty: 'Medium',
      calories: 520,
      protein: 36,
      carbs: 48,
      fat: 20,
      fiber: 13,
      recoveryScore: 95,
      antiInflammatoryIndex: 'Very High (+8.9)',
      summary: 'Crispy tamari-marinated organic tempeh, sweet potato wedges, edamame, and broccoli over forbidden black rice with ceremonial matcha lime vinaigrette.',
      recoveryPerks: [
        'Sustained L-Theanine + EGCG catechins provide alert focus without cortisol-spiking caffeine crashes',
        'CoQ10 and fermented tempeh peptides optimize mitochondrial ATP energy output',
        'High potassium and folate support active cellular methylation and detoxification',
        'Anthocyanin-dense black rice provides 3x more antioxidants than standard brown rice'
      ],
      micronutrients: {
        magnesium: '210mg (52% DV)',
        potassium: '1,050mg (30% DV)',
        zinc: '4.8mg (44% DV)',
        vitaminD: '120 IU (15% DV)',
        omega3: '1,100mg',
        sodium: '490mg'
      },
      ingredients: [
        '150g Organic artisan tempeh, sliced into triangles',
        '1/2 cup cooked forbidden black rice (forbidden rice)',
        '1/2 cup steamed edamame beans',
        '1/2 cup roasted sweet potato cubes',
        '1 cup tender broccoli florets (steamed crisp)',
        '1/2 Hass avocado, fanned',
        '1 tbsp Tamari & grated ginger glaze',
        '1.5 tbsp Ceremonial matcha-lime-sesame vinaigrette'
      ],
      instructions: [
        'Pan-sear tempeh in a touch of avocado oil for 3 minutes per side until golden brown; glaze with ginger tamari.',
        'Warm the forbidden black rice and place as the hearty base of your nutrient bowl.',
        'Arrange seasoned tempeh, roasted sweet potato, edamame, steamed broccoli, and avocado neatly.',
        'Whisk culinary matcha powder with lime juice, rice vinegar, and toasted sesame oil; drizzle over the bowl.'
      ],
      tags: ['Vegan', 'Mitochondrial Energy', 'Clean Fuel', 'High Fiber', 'Gut Healthy']
    },
    {
      id: 'meal-4',
      title: 'Bone Broth & Slow-Braised Grass-Fed Beef Collagen Stew',
      category: 'recovery',
      recoveryType: 'rest',
      image: './images/image-5.png',
      prepTime: '35 mins',
      difficulty: 'Medium',
      calories: 610,
      protein: 54,
      carbs: 38,
      fat: 24,
      fiber: 7,
      recoveryScore: 99,
      antiInflammatoryIndex: 'Exceptional (+9.9)',
      summary: '24-hour grass-fed bone broth simmered with braised lean beef, shiitake mushrooms, ginger root, and winter root vegetables for tendon repair.',
      recoveryPerks: [
        'Packed with glycine, proline, and hydroxyproline for repairing micro-tears in ligaments and cartilage',
        'Bio-active beta-glucans from medicinal shiitake mushrooms boost natural innate immune modulation',
        'Gingerols and shogaols reduce muscle tenderness and systemic joint stiffness',
        'High natural gelatin restores gut mucosal barrier integrity and improves nutrient assimilation'
      ],
      micronutrients: {
        magnesium: '145mg (36% DV)',
        potassium: '1,180mg (34% DV)',
        zinc: '8.4mg (76% DV)',
        vitaminD: '240 IU (30% DV)',
        omega3: '950mg',
        sodium: '620mg (Natural Mineral Broth)'
      },
      ingredients: [
        '200g Grass-fed braised beef tender cuts',
        '2 cups 24-hr simmered organic beef bone broth',
        '1 cup sliced fresh shiitake & oyster mushrooms',
        '1 medium carrot and 1 parsnip, chopped',
        '1 tbsp fresh grated ginger & 3 crushed garlic cloves',
        '1 cup baby spinach (folded in at the end)',
        '1 tsp fresh thyme & rosemary',
        'Sea salt and freshly ground peppercorns'
      ],
      instructions: [
        'Brown the beef cuts in a heavy dutch oven with garlic, fresh ginger, and herbs until aromatic.',
        'Pour in the rich 24-hr bone broth, carrots, parsnips, and sliced medicinal mushrooms.',
        'Simmer gently on low heat for 25 minutes until the root vegetables are tender and broth is rich.',
        'Fold in baby spinach right before serving until bright green and wilted. Serve piping hot with toasted sourdough if desired.'
      ],
      tags: ['Joint Repair', 'High Collagen', 'Immunity', 'High Protein', 'Paleo']
    },
    {
      id: 'meal-5',
      title: 'Electrolyte Coconut Hydration & Citrus Ceviche Bowl',
      category: 'hydration',
      recoveryType: 'hydration',
      image: './images/image-6.png',
      prepTime: '15 mins',
      difficulty: 'Easy',
      calories: 420,
      protein: 38,
      carbs: 34,
      fat: 14,
      fiber: 6,
      recoveryScore: 97,
      antiInflammatoryIndex: 'Superior (+9.3)',
      summary: 'Sustainably caught wild sea bass ceviche cured in fresh lime and coconut water, paired with cucumber ribbons, mango, and mint.',
      recoveryPerks: [
        'Over 1,200mg of bio-available potassium & natural sodium for immediate intracellular osmolality balance',
        'Rich in marine bio-peptides that accelerate soft tissue micro-vascularization',
        'High natural Vitamin C synergizes collagen synthesis while quenching exercise-induced free radicals',
        'Natural electrolytes prevent post-training dehydration headaches and muscle cramping'
      ],
      micronutrients: {
        magnesium: '160mg (40% DV)',
        potassium: '1,240mg (35% DV)',
        zinc: '2.8mg (25% DV)',
        vitaminD: '450 IU (56% DV)',
        omega3: '1,650mg',
        sodium: '540mg'
      },
      ingredients: [
        '180g Sashimi-grade wild sea bass or halibut, cubed',
        '1/2 cup 100% pure raw coconut water',
        'Juice of 3 fresh limes and 1/2 ruby grapefruit',
        '1/2 cup diced ripe mango',
        '1 Persian cucumber, shaved into thin ribbons',
        '1/4 red onion, thinly sliced',
        'Fresh cilantro and mint leaves',
        '1 tbsp extra virgin olive oil and pinch of flaky sea salt'
      ],
      instructions: [
        'In a glass bowl, submerge cubed fresh fish in freshly squeezed lime and grapefruit juice for 8-10 minutes until opaque.',
        'Drain half the citrus juice, then pour in chilled raw coconut water and extra virgin olive oil.',
        'Gently fold in shaved cucumber ribbons, diced mango, red onion, mint, and cilantro.',
        'Season with flaky sea salt and serve immediately in a chilled bowl.'
      ],
      tags: ['Hydration', 'Electrolyte Rich', 'Gluten-Free', 'High Protein', 'No Cook']
    },
    {
      id: 'meal-6',
      title: 'Anti-Inflammatory Golden Turmeric Tofu Scramble',
      category: 'anti-inflammatory',
      recoveryType: 'workout',
      image: './images/image-7.png',
      prepTime: '15 mins',
      difficulty: 'Easy',
      calories: 410,
      protein: 32,
      carbs: 28,
      fat: 18,
      fiber: 8,
      recoveryScore: 94,
      antiInflammatoryIndex: 'Very High (+9.1)',
      summary: 'Sprouted high-protein organic tofu scrambled with ground turmeric, black pepper, nutritional yeast, roasted cherry tomatoes, and avocado.',
      recoveryPerks: [
        'Curcumin + piperine matrix reduces delayed onset muscle soreness (DOMS) by up to 47%',
        '32g complete vegan protein containing all essential amino acids for tissue recovery',
        'Nutritional yeast delivers bio-active B12 and beta-glucans for metabolic stamina',
        'Rich in monounsaturated fats facilitating absorption of fat-soluble phytonutrients'
      ],
      micronutrients: {
        magnesium: '190mg (48% DV)',
        potassium: '880mg (25% DV)',
        zinc: '3.9mg (35% DV)',
        vitaminD: '180 IU (23% DV)',
        omega3: '900mg',
        sodium: '390mg'
      },
      ingredients: [
        '250g Sprouted organic firm tofu, crumbled',
        '1 tsp high-curcumin ground turmeric',
        '1/4 tsp freshly cracked black pepper (essential for bioavailability)',
        '2 tbsp fortifying nutritional yeast flakes',
        '1 cup baby spinach & 1/2 cup blistered cherry tomatoes',
        '1/2 avocado, diced',
        '1 slice sprouted sourdough toast',
        '1 tbsp extra virgin olive oil'
      ],
      instructions: [
        'Heat olive oil in a skillet over medium heat. Add crumbled tofu and sauté for 4 minutes.',
        'Stir in turmeric, black pepper, nutritional yeast, garlic powder, and a splash of almond milk until golden.',
        'Fold in baby spinach and cherry tomatoes until spinach is wilted and tomatoes burst.',
        'Serve hot over toasted sprouted sourdough with fresh avocado slices on top.'
      ],
      tags: ['Vegan', 'High Protein', 'Anti-Inflammatory', 'Quick Breakfast']
    },
    {
      id: 'meal-7',
      title: 'Mediterranean Herb Chicken & Roasted Sweet Potato Power Plate',
      category: 'high-protein',
      recoveryType: 'workout',
      image: './images/image-8.png',
      prepTime: '25 mins',
      difficulty: 'Medium',
      calories: 620,
      protein: 52,
      carbs: 52,
      fat: 18,
      fiber: 8,
      recoveryScore: 97,
      antiInflammatoryIndex: 'High (+8.7)',
      summary: 'Rosemary and lemon grilled free-range chicken breast paired with paprika roasted sweet potatoes, charred asparagus, and kalamata hummus.',
      recoveryPerks: [
        '52g lean muscle-repair protein to stimulate anabolic recovery pathways',
        'Beta-carotene from sweet potatoes accelerates cellular membrane repair after high-intensity training',
        'Asparagus provides natural asparagine and potassium to balance fluid retention',
        'Polyphenol-rich olive oil and kalamata olives suppress exercise-induced oxidative stress'
      ],
      micronutrients: {
        magnesium: '140mg (35% DV)',
        potassium: '1,150mg (33% DV)',
        zinc: '3.6mg (33% DV)',
        vitaminD: '80 IU (10% DV)',
        omega3: '450mg',
        sodium: '480mg'
      },
      ingredients: [
        '220g Free-range chicken breast, marinated in rosemary, garlic & lemon',
        '1 large Japanese sweet potato, diced into cubes and roasted',
        '8 spears fresh green asparagus, grilled',
        '2 tbsp homemade garlic kalamata olive hummus',
        '1 tbsp cold-pressed extra virgin olive oil',
        'Pinch of smoked Spanish paprika and coarse sea salt'
      ],
      instructions: [
        'Preheat oven to 200°C (400°F). Toss sweet potato cubes with olive oil and paprika; roast for 20 mins.',
        'Grill seasoned chicken breast on a hot grill pan for 6-7 minutes per side until internal temp hits 75°C.',
        'Grill asparagus spears for 4 minutes until tender-crisp with light char marks.',
        'Plate the carved chicken breast with sweet potatoes, asparagus, and a generous dollop of hummus.'
      ],
      tags: ['High Protein', 'Post-Workout', 'Dairy-Free', 'Muscle Builder']
    },
    {
      id: 'meal-8',
      title: 'Dark Cacao & Maca Cellular Endurance Smoothie',
      category: 'energy',
      recoveryType: 'energy',
      image: './images/image-9.png',
      prepTime: '5 mins',
      difficulty: 'Super Fast',
      calories: 390,
      protein: 30,
      carbs: 42,
      fat: 11,
      fiber: 9,
      recoveryScore: 93,
      antiInflammatoryIndex: 'Very High (+9.0)',
      summary: 'Raw ceremonial organic cacao blended with gelatinized Peruvian maca, wild blueberries, grass-fed whey isolate, and unsweetened almond milk.',
      recoveryPerks: [
        'Flavanol-rich raw cacao boosts endothelial nitric oxide production and cerebral micro-circulation',
        'Adaptogenic Maca balances hypothalamic-pituitary-adrenal (HPA) axis stress responses',
        'Wild blueberries deliver anthocyanins that speed motor skill and muscular recovery',
        '30g rapid-digesting protein prevents exercise-induced muscle catabolism'
      ],
      micronutrients: {
        magnesium: '280mg (70% DV)',
        potassium: '740mg (21% DV)',
        zinc: '3.5mg (32% DV)',
        vitaminD: '160 IU (20% DV)',
        omega3: '1,200mg (ALA)',
        sodium: '210mg'
      },
      ingredients: [
        '2 tbsp raw organic cacao powder (unalkalized)',
        '1 tsp gelatinized Peruvian yellow maca root powder',
        '1 scoop grass-fed whey isolate or organic pea isolate (vanilla or unflavored)',
        '1/2 cup wild frozen Maine blueberries',
        '1 small ripe banana (frozen for creaminess)',
        '1 cup unsweetened almond or cashew milk',
        '1 tbsp raw almond butter',
        'Pinch of Himalayan mineral salt'
      ],
      instructions: [
        'Add all ingredients into a high-speed blender starting with liquids first.',
        'Blend on high for 45-60 seconds until completely silky and velvety.',
        'Pour into a chilled tumbler and garnish with raw cacao nibs.'
      ],
      tags: ['Energy Booster', 'Antioxidant Rich', 'Quick Snack', 'Pre/Post Fuel']
    },
    {
      id: 'meal-9',
      title: 'Chamomile & Magnesium Poached Pears with Greek Yogurt Cream',
      category: 'sleep',
      recoveryType: 'sleep',
      image: './images/image-10.png',
      prepTime: '20 mins',
      difficulty: 'Easy',
      calories: 310,
      protein: 24,
      carbs: 38,
      fat: 6,
      fiber: 7,
      recoveryScore: 95,
      antiInflammatoryIndex: 'High (+8.8)',
      summary: 'Fresh Bosc pears gently poached in whole chamomile flower tea, star anise, and lemon, served over rich probiotic Greek yogurt with crushed pistachios.',
      recoveryPerks: [
        'Apigenin in chamomile binds to benzodiazepine receptors in the brain to induce restful sleep',
        'Slow-digesting micellar casein in Greek yogurt provides steady overnight amino acid delivery',
        'Pistachios are naturally among the highest dietary sources of plant melatonin and vitamin B6',
        'Gentle warm poached fruit is effortlessly digested, minimizing gastrointestinal nocturnal load'
      ],
      micronutrients: {
        magnesium: '175mg (44% DV)',
        potassium: '620mg (18% DV)',
        zinc: '2.4mg (22% DV)',
        vitaminD: '100 IU (13% DV)',
        omega3: '350mg',
        sodium: '90mg'
      },
      ingredients: [
        '1 large Bosc pear, peeled and halved',
        '2 bags or 2 tbsp loose whole organic chamomile flowers',
        '1 whole star anise & 1 cinnamon stick',
        '1 cup organic 0% or 2% plain Greek yogurt',
        '1 tbsp raw crushed pistachios',
        '1 tsp raw wildflower honey',
        'Grated zest of 1/2 organic lemon'
      ],
      instructions: [
        'In a small saucepan, bring 2 cups of water with chamomile, star anise, and cinnamon to a gentle boil; reduce heat.',
        'Place pear halves into the warm tea broth and poach gently for 12-14 minutes until tender.',
        'Spoon creamy Greek yogurt onto a serving plate.',
        'Top with warm poached pear, drizzle a spoonful of the chamomile reduction, honey, and crushed pistachios.'
      ],
      tags: ['Sleep Ritual', 'Probiotic', 'High Protein', 'Dessert Recovery']
    },
    {
      id: 'meal-10',
      title: 'Wild Berry Polyphenol Acai Recovery Bowl',
      category: 'anti-inflammatory',
      recoveryType: 'rest',
      image: './images/image-11.png',
      prepTime: '8 mins',
      difficulty: 'Easy',
      calories: 430,
      protein: 28,
      carbs: 54,
      fat: 12,
      fiber: 12,
      recoveryScore: 96,
      antiInflammatoryIndex: 'Exceptional (+9.7)',
      summary: 'Pure unsweetened Amazonian acai blended with blackberries, raspberries, plant protein, topped with hemp hearts and sprouted granola.',
      recoveryPerks: [
        'Dense polyphenol profile neutralizes systemic reactive oxygen species (ROS) post-exercise',
        'High anthocyanin index promotes micro-vascular elasticity and blood flow',
        'Hemp seeds provide the perfect 3:1 ratio of Omega-6 to Omega-3 essential fatty acids',
        'Enriched with prebiotic fibers that cultivate gut microbiome species producing short-chain fatty acids (SCFAs)'
      ],
      micronutrients: {
        magnesium: '220mg (55% DV)',
        potassium: '780mg (22% DV)',
        zinc: '3.8mg (35% DV)',
        vitaminD: '90 IU (11% DV)',
        omega3: '2,900mg',
        sodium: '150mg'
      },
      ingredients: [
        '1 packet unsweetened pure organic acai puree',
        '1/2 cup frozen organic blackberries & raspberries',
        '1 scoop vanilla plant protein isolate',
        '1/2 cup unsweetened coconut water or oat milk',
        '2 tbsp sprouted grain gluten-free granola',
        '1 tbsp raw hemp hearts',
        '1 tbsp fresh pomegranate arils',
        'Fresh mint leaves'
      ],
      instructions: [
        'Break acai packet and add to blender with frozen berries, protein powder, and coconut water.',
        'Blend using tamper tool until thick, smooth, and soft-serve consistency.',
        'Scoop into a ceramic bowl and artistically top with granola, hemp hearts, and fresh pomegranate arils.'
      ],
      tags: ['Anti-Inflammatory', 'Superfood', 'Vegan', 'High Fiber']
    },
    {
      id: 'meal-11',
      title: 'Zesty Lime & Mineral Electrolyte Chia Fresca',
      category: 'hydration',
      recoveryType: 'hydration',
      image: './images/image-12.png',
      prepTime: '5 mins',
      difficulty: 'Super Fast',
      calories: 180,
      protein: 8,
      carbs: 22,
      fat: 6,
      fiber: 7,
      recoveryScore: 94,
      antiInflammatoryIndex: 'High (+8.5)',
      summary: 'Chilled mineral water infused with swollen hydrated chia seeds, fresh lime juice, Celtic sea salt, and organic aloe vera juice.',
      recoveryPerks: [
        'Hydrophilic chia seed mucilage retains 10x its weight in water, creating slow-release intracellular hydration',
        'Celtic sea salt delivers 82 natural macro and trace minerals for electrical conductivity',
        'Aloe vera polysaccharides soothe gastrointestinal lining and accelerate gastric emptying of fluids',
        'Instant relief for heat exhaustion, high-sweat workouts, and travel dehydration'
      ],
      micronutrients: {
        magnesium: '140mg (35% DV)',
        potassium: '450mg (13% DV)',
        zinc: '1.8mg (16% DV)',
        vitaminD: '0 IU',
        omega3: '3,200mg (ALA)',
        sodium: '380mg (Bio-Active Celtic)'
      },
      ingredients: [
        '1.5 tbsp organic black chia seeds',
        '350ml chilled spring or mineral water',
        '100ml pure organic aloe vera juice',
        'Juice of 1 large juicy lime',
        '1/4 tsp light grey Celtic sea salt',
        '1 tsp raw agave or maple syrup (optional)',
        'Fresh mint sprigs and lime slices'
      ],
      instructions: [
        'Combine chia seeds, mineral water, aloe vera, and lime juice in a shaker or glass bottle.',
        'Shake vigorously for 30 seconds, then let rest for 10 minutes for chia gel formation.',
        'Add sea salt and natural sweetener; shake once more over ice with fresh mint.'
      ],
      tags: ['Hydration', 'Electrolytes', 'Cleanse', 'Vegan', 'Quick Prep']
    },
    {
      id: 'meal-12',
      title: 'Grass-Fed Bison Sweet Potato Recovery Hash',
      category: 'high-protein',
      recoveryType: 'workout',
      image: './images/image-13.png',
      prepTime: '20 mins',
      difficulty: 'Easy',
      calories: 590,
      protein: 50,
      carbs: 45,
      fat: 21,
      fiber: 8,
      recoveryScore: 98,
      antiInflammatoryIndex: 'High (+8.8)',
      summary: 'Lean pasture-raised ground bison sautéed with diced sweet potatoes, bell peppers, baby spinach, and a pasture-raised fried egg.',
      recoveryPerks: [
        'Bison is naturally higher in bioavailable iron and zinc than standard beef, optimizing cellular oxygen transport',
        '50g high biological value protein with complete essential amino acid profile',
        'Choline from pasture-raised egg supports neuromuscular acetylcholine signaling',
        'Capsanthin and vitamin C in bell peppers accelerate collagen synthesis in healing tendons'
      ],
      micronutrients: {
        magnesium: '160mg (40% DV)',
        potassium: '1,120mg (32% DV)',
        zinc: '7.8mg (71% DV)',
        vitaminD: '90 IU (11% DV)',
        omega3: '850mg (CLA & ALA)',
        sodium: '460mg'
      },
      ingredients: [
        '180g Lean ground grass-fed bison (90/10)',
        '1 medium sweet potato, peeled and finely diced',
        '1/2 red bell pepper & 1/2 yellow onion, diced',
        '1 cup baby spinach',
        '1 pasture-raised organic egg',
        '1 tbsp avocado oil',
        '1/2 tsp ground cumin, smoked paprika, garlic powder, sea salt'
      ],
      instructions: [
        'Heat avocado oil in a cast iron skillet. Sauté sweet potato cubes with spices for 8 mins until tender with crisp edges.',
        'Push potatoes to the side; add ground bison, onions, and bell peppers, breaking up meat until browned.',
        'Stir all ingredients together and fold in fresh baby spinach for 1 minute until wilted.',
        'In a separate pan, fry an egg sunny-side up; slide on top of the hash and season with cracked pepper.'
      ],
      tags: ['High Protein', 'Post-Workout', 'Paleo', 'Iron-Rich']
    }
  ],

  // Featured Nutrition Plans
  plans: [
    {
      id: 'plan-1',
      title: 'Anabolic Hyper-Recovery & Muscle Remodeling',
      category: 'Hypertrophy & Strength',
      duration: '4 Weeks',
      caloriesTarget: '2,600 - 3,100 kcal',
      proteinTarget: '180 - 220g/day',
      image: './images/image-14.png',
      badge: 'Elite Athlete Favorite',
      accent: '#C85A32',
      overview: 'Engineered specifically for heavy resistance training, CrossFit, and power athletics. Leverages precise protein timing, high-leucine pulses, and rapid glycogen restocking.',
      keyPillars: [
        '40g Leucine-rich protein pulse every 3.5 - 4 hours',
        'Peri-workout carbohydrate timing to maintain muscle intra-cellular hydration',
        'High-dose natural EPA/DHA Omega-3s to modulate muscle soreness',
        'Creatine monohydrate & beta-alanine synergistic co-factors'
      ],
      weeklySchedule: ['Mon: High Glycogen / Heavy Pull', 'Tue: Moderate Fuel / Press Day', 'Wed: Active Tissue Regeneration', 'Thu: Anabolic Re-feed / Leg Day', 'Fri: Upper Hypertrophy Matrix', 'Sat: Metabolic Condition', 'Sun: Deep Rest Protocol']
    },
    {
      id: 'plan-2',
      title: 'Circadian Reset & Deep Sleep Architecture',
      category: 'Sleep & Nervous System',
      duration: '2 Weeks',
      caloriesTarget: '1,900 - 2,300 kcal',
      proteinTarget: '120 - 150g/day',
      image: './images/image-15.png',
      badge: 'Stress & Burnout Relief',
      accent: '#421C38',
      overview: 'Formulated to optimize your sleep cycle, balance cortisol rhythms, and maximize deep delta-wave sleep through circadian-timed macronutrients and phytomelatonin sources.',
      keyPillars: [
        'Morning cortisol activation via tyrosine and polyphenol pairing',
        'Evening low-glycemic carb bridge to facilitate brain L-Tryptophan uptake',
        'Elimination of nocturnal blood sugar crashes and caffeine half-life tracking',
        'Magnesium bisglycinate + zinc + tart cherry nightly ritual'
      ],
      weeklySchedule: ['Day 1-3: Cortisol Awakening & Light Sync', 'Day 4-7: Evening Neurotransmitter Loading', 'Day 8-10: Glycemic Curve Smoothing', 'Day 11-14: Sustained Deep Sleep Architecture']
    },
    {
      id: 'plan-3',
      title: 'Cellular Anti-Inflammatory Shield',
      category: 'Longevity & Joint Health',
      duration: '6 Weeks',
      caloriesTarget: '2,100 - 2,500 kcal',
      proteinTarget: '135 - 165g/day',
      image: './images/image-16.png',
      badge: 'Joint & Gut Healing',
      accent: '#2E6F58',
      overview: 'Clinical-grade Mediterranean-Nordic hybrid protocol designed to suppress hs-CRP, reduce joint stiffness, heal gut barrier hyperpermeability, and restore tendon elasticity.',
      keyPillars: [
        'Strict 1:1 Omega-6 to Omega-3 dietary ratio target',
        '30+ unique weekly plant species to diversify beneficial gut microbiome',
        'High dietary curcumin, gingerol, quercetin, and anthocyanin density',
        'Hydrolyzed marine and grass-fed collagen peptide supplementation'
      ],
      weeklySchedule: ['Phase 1 (W1-2): Systemic Detox & Gut Barrier Reset', 'Phase 2 (W3-4): Connective Tissue Regeneration', 'Phase 3 (W5-6): Long-term Resilience Consolidation']
    },
    {
      id: 'plan-4',
      title: 'Ultra-Endurance Glycogen & Electrolyte Recharger',
      category: 'Endurance & Cardio',
      duration: '4 Weeks',
      caloriesTarget: '2,800 - 3,400 kcal',
      proteinTarget: '140 - 170g/day',
      image: './images/image-17.png',
      badge: 'Runners & Cyclists',
      accent: '#2563EB',
      overview: 'Tailored for marathoners, triathletes, cyclists, and hybrid athletes. Focuses on cellular hydration, mitochondrial fat oxidation efficiency, and rapid liver-muscle glycogen re-synthesis.',
      keyPillars: [
        'Precision sodium-potassium-magnesium hydration formulation',
        'Multi-transportable carbohydrate matrices (Glucose:Fructose 1:0.8)',
        'Mitochondrial antioxidants (CoQ10, Alpha Lipoic Acid, Beetroot Nitrates)',
        'Post-long-haul gut protection and inflammation dampening'
      ],
      weeklySchedule: ['Week 1: Electrolyte Loading & Baseline Aerobic Fuel', 'Week 2: High-Volume Training Glycogen Strategy', 'Week 3: Peak Mileage Carb Periodization', 'Week 4: Taper & Supercompensation Strategy']
    }
  ],

  // Verified Wellness & Recovery Professionals
  professionals: [
    {
      id: 'coach-1',
      name: 'Dr. Evelyn Vance, PhD, RD',
      title: 'Chief Sports Dietitian & Olympic Recovery Consultant',
      specialty: 'Muscle Protein Kinetics & DOMS Mitigation',
      rating: 4.98,
      reviewsCount: 142,
      hourlyRate: '$160 / hr',
      avatar: './images/image-18.png',
      badge: 'Board Certified CSSD',
      experience: '12+ Years Experience',
      location: 'Zurich / Remote Global',
      bio: 'Former consultant for Olympic track & field athletes and Premier League clubs. Specializes in translating biochemical biomarkers into actionable nutritional recovery protocols.',
      focusAreas: ['Hypertrophy Optimization', 'Post-Surgery Recovery', 'Blood Biomarker Analysis', 'Nutrient Timing']
    },
    {
      id: 'coach-2',
      name: 'Marcus Sterling, MS, CSCS',
      title: 'Sleep Architecture & Autonomic Nervous System Coach',
      specialty: 'CNS Fatigue, HRV Optimization & Circadian Rhythm',
      rating: 4.95,
      reviewsCount: 98,
      hourlyRate: '$140 / hr',
      avatar: './images/image-19.png',
      badge: 'Oura & Whoop Certified',
      experience: '9 Years Experience',
      location: 'Austin, TX / Remote',
      bio: 'Dedicated to helping high-output executives and athletes overcome autonomic nervous system burnout. Combines chronobiology nutrition with parasympathetic recovery protocols.',
      focusAreas: ['HRV Enhancement', 'Deep Delta Sleep', 'Adrenal Recovery', 'Evening Nutrition Protocols']
    },
    {
      id: 'coach-3',
      name: 'Dr. Amara Chen, MD, IFMCP',
      title: 'Functional Medicine Physician & Gut-Brain Specialist',
      specialty: 'Systemic Inflammation, Leaky Gut & Food Sensitivities',
      rating: 4.99,
      reviewsCount: 175,
      hourlyRate: '$190 / hr',
      avatar: './images/image-20.png',
      badge: 'Institute for Functional Medicine',
      experience: '15+ Years Experience',
      location: 'San Francisco, CA / Remote',
      bio: 'Pioneering researcher in gut mucosal barrier repair and chronic inflammatory downregulation. Creator of the Nourish Microbiome Repair Matrix.',
      focusAreas: ['Gut Microbiome Sequencing', 'Anti-Inflammatory Nutrition', 'Autoimmune Support', 'Food Sensitivity Elimination']
    },
    {
      id: 'coach-4',
      name: 'Julian Navarro, MSc',
      title: 'Cellular Hydration & Endurance Nutrition Director',
      specialty: 'Electrolyte Osmolality & Mitochondrial Bio-energetics',
      rating: 4.92,
      reviewsCount: 84,
      hourlyRate: '$130 / hr',
      avatar: './images/image-21.png',
      badge: 'Ultra-Endurance Specialist',
      experience: '8 Years Experience',
      location: 'Boulder, CO / Remote',
      bio: 'Coach for Ironman champions and ultra-marathon competitors. Focuses on intracellular water kinetics, cramping prevention, and glycogen supercompensation.',
      focusAreas: ['Sweat Sodium Profiling', 'Ultra-Endurance Carb Loading', 'Heat Acclimation Nutrition', 'Lactate Clearance']
    }
  ],

  // Deep Dive Educational Guides
  guides: [
    {
      id: 'guide-1',
      title: 'The 45-Minute Anabolic Window: Science vs. Myth',
      category: 'Muscle Recovery',
      readTime: '6 min read',
      image: './images/image-22.png',
      author: 'Dr. Evelyn Vance, RD',
      badge: 'Clinical Evidence Level: A',
      summary: 'Explore the modern molecular science of the post-exercise nutrient window. Learn how leucine thresholds, fractional synthetic rate (FSR), and glycogen re-synthesis truly behave in trained individuals.',
      takeaways: [
        'The anabolic window is more flexible than once thought, spanning 2-3 hours, but immediate intake within 45 mins accelerates glycogen re-synthesis by 50%.',
        'A minimum of 2.7 - 3.5g of free Leucine is required to reach the "Leucine Trigger" for peak mTORC1 activation.',
        'Pairing 0.3g protein/kg with 0.8g carbohydrate/kg yields superior muscular adaptation compared to protein alone.'
      ]
    },
    {
      id: 'guide-2',
      title: 'Tart Cherry, Phytomelatonin & Deep Sleep Architecture',
      category: 'Sleep Optimization',
      readTime: '8 min read',
      image: './images/image-23.png',
      author: 'Marcus Sterling, MS',
      badge: 'Clinical Evidence Level: A',
      summary: 'How anthocyanin-dense Montmorency cherries inhibit indoleamine 2,3-dioxygenase to spare circulating tryptophan, resulting in longer REM and restorative Slow-Wave Delta sleep.',
      takeaways: [
        'Tart cherry juice increases urinary melatonin excretion and extends total sleep time by ~39 to 84 minutes in clinical trials.',
        'Downregulates nocturnal pro-inflammatory cytokines, reducing next-day joint and muscle stiffness.',
        'Optimal dosage: 30ml pure concentrate or 240ml juice 90 minutes before bedtime.'
      ]
    },
    {
      id: 'guide-3',
      title: 'Cellular Osmolality: Why Plain Water Isn’t Enough for Recovery',
      category: 'Hydration Science',
      readTime: '5 min read',
      image: './images/image-24.png',
      author: 'Julian Navarro, MSc',
      badge: 'Clinical Evidence Level: A',
      summary: 'Understanding the sodium-potassium ATPase pump. Why drinking gallons of distilled water post-workout can actually cause intracellular dehydration and muscle spasms.',
      takeaways: [
        'Water absorption in the small intestine requires SGLT1 co-transporters, which function exponentially better with sodium and modest glucose.',
        'Replenish 120-150% of sweat loss over 2-4 hours with a solution containing 400-700mg/L sodium.',
        'Potassium is the primary intracellular cation; pair high-sodium rehydration with coconut water or avocado.'
      ]
    },
    {
      id: 'guide-4',
      title: 'The Anti-Inflammatory Index: Eating to Downregulate hs-CRP',
      category: 'Inflammation & Gut',
      readTime: '7 min read',
      image: './images/image-25.png',
      author: 'Dr. Amara Chen, MD',
      badge: 'Clinical Evidence Level: A',
      summary: 'A deep biochemical dive into how polyphenol compounds like curcumin, resveratrol, and EGCG inhibit NF-kB signaling and lower systemic C-Reactive Protein.',
      takeaways: [
        'Chronic low-grade inflammation blunts athletic recovery and impairs insulin sensitivity.',
        'Combining curcumin with piperine boosts systemic bioavailability by 2,000%.',
        'Consuming 30+ varied plant fibers weekly stimulates Akkermansia muciniphila to fortify the intestinal barrier.'
      ]
    },
    {
      id: 'guide-5',
      title: 'Collagen Peptides & Vitamin C for Ligament Tensile Strength',
      category: 'Connective Tissue',
      readTime: '6 min read',
      image: './images/image-26.png',
      author: 'Dr. Evelyn Vance, RD',
      badge: 'Clinical Evidence Level: B+',
      summary: 'How hydrolyzed collagen taken 45 minutes prior to load enhances collagen cross-linking and strengthens connective tendons and ligaments.',
      takeaways: [
        'Tendons have minimal vascular supply; nutrient delivery relies on interstitial fluid movement during mechanical loading.',
        '15g hydrolyzed collagen paired with 50mg Vitamin C 45m prior to jumping or loading doubles amino acid incorporation into cartilage.',
        'Long-term supplementation shows marked reductions in knee joint discomfort in athletes.'
      ]
    },
    {
      id: 'guide-6',
      title: 'Gut Microbiome Diversity: The Hidden Driver of Recovery',
      category: 'Microbiome & Immunity',
      readTime: '6 min read',
      image: './images/image-31.png',
      author: 'Dr. Amara Chen, MD',
      badge: 'Clinical Evidence Level: A',
      summary: 'Explore the critical role of the gut microbiome in systemic recovery. Understand how short-chain fatty acids (SCFAs) regulate immune response and accelerate tissue repair.',
      takeaways: [
        'A diverse microbiome produces SCFAs like butyrate, which maintain intestinal barrier integrity and reduce systemic inflammation.',
        'High-fiber diets directly fuel beneficial bacteria, leading to a faster clearing of exercise-induced metabolites.',
        'Fermented foods and targeted probiotics can reduce upper respiratory tract infections in athletes.'
      ]
    }
  ],

  // Community & Clinical Success Stories
  testimonials: [
    {
      id: 'test-1',
      name: 'Sarah Jenkins',
      role: 'CrossFit Athlete & Marathoner',
      image: './images/image-27.png',
      quote: 'NOURISH completely revolutionized my recovery. By utilizing the Post-Workout Hyper-Recovery mode and dialing in my leucine thresholds, my DOMS reduced by at least 60% and my resting HRV jumped from 48ms to 74ms.',
      metricBefore: 'HRV: 48 ms',
      metricAfter: 'HRV: 74 ms (+54%)',
      planUsed: 'Anabolic Hyper-Recovery'
    },
    {
      id: 'test-2',
      name: 'David Thorne',
      role: 'Tech Executive & Triathlete',
      image: './images/image-28.png',
      quote: 'The Circadian Sleep Protocol and Tart Cherry recovery routine fixed my chronic 3 AM waking. Having Cronometer-grade precision without the clutter changed my everyday cognitive energy.',
      metricBefore: 'Deep Sleep: 38 min',
      metricAfter: 'Deep Sleep: 1 hr 42 min',
      planUsed: 'Circadian Reset & Deep Sleep'
    },
    {
      id: 'test-3',
      name: 'Elena Rostova',
      role: 'Pro Tennis Player',
      image: './images/image-29.png',
      quote: 'Booking a consultation with Dr. Vance directly inside NOURISH gave me a custom electrolyte osmolality protocol that completely eliminated my third-set cramping.',
      metricBefore: 'Cramping: 3x / month',
      metricAfter: 'Cramping: 0 in 6 months',
      planUsed: 'Ultra-Endurance Glycogen'
    }
  ],

  // Default User State (Synced with localStorage)
  initialUserState: {
    user: {
      name: 'Alex Mercer',
      email: 'alex.mercer@nourish.io',
      avatar: './images/image-30.png',
      tier: 'Pro Recovery Member',
      recoveryGoal: 'Muscle Repair & Deep Sleep',
      activityLevel: 'High (5-6 days/week)',
      dietaryPreference: 'Anti-Inflammatory Whole Foods',
      calorieTarget: 2450,
      proteinTarget: 175,
      carbsTarget: 220,
      fatTarget: 75,
      hydrationGoalMl: 3200
    },
    todayLog: {
      date: 'Today',
      caloriesConsumed: 1840,
      proteinConsumed: 142,
      carbsConsumed: 168,
      fatConsumed: 58,
      waterLoggedMl: 2400,
      sleepHours: 7.8,
      sleepQualityScore: 88,
      recoveryReadinessScore: 92,
      mealsLogged: [
        {
          id: 'log-1',
          mealTime: 'Breakfast',
          title: 'Anti-Inflammatory Golden Turmeric Tofu Scramble',
          calories: 410,
          protein: 32,
          carbs: 28,
          fat: 18,
          image: './images/image-7.png'
        },
        {
          id: 'log-2',
          mealTime: 'Lunch',
          title: 'Wild Salmon Quinoa Recovery Bowl with Turmeric Tahini',
          calories: 580,
          protein: 48,
          carbs: 46,
          fat: 22,
          image: './images/image-2.png'
        },
        {
          id: 'log-3',
          mealTime: 'Recovery Snack',
          title: 'Dark Cacao & Maca Cellular Endurance Smoothie',
          calories: 390,
          protein: 30,
          carbs: 42,
          fat: 11,
          image: './images/image-9.png'
        },
        {
          id: 'log-4',
          mealTime: 'Dinner',
          title: 'Mediterranean Herb Chicken & Roasted Sweet Potato',
          calories: 460,
          protein: 32,
          carbs: 52,
          fat: 7,
          image: './images/image-8.png'
        }
      ],
      sorenessMap: {
        quads: 'Mild (DOMS)',
        hamstrings: 'Optimal',
        shoulders: 'Moderate Tightness',
        lowerBack: 'Optimal',
        calves: 'Optimal'
      },
      recoveryNotes: 'Did 75 mins heavy leg workout. Consumed leucine pulse within 25 mins. Feeling great neuromuscular tone; ready for tart cherry sleep stack.'
    },
    savedMeals: ['meal-1', 'meal-2', 'meal-4', 'meal-8'],
    savedGuides: ['guide-1', 'guide-2'],
    consultations: [
      {
        id: 'booking-1',
        coachName: 'Dr. Evelyn Vance, PhD, RD',
        coachAvatar: './images/image-18.png',
        date: 'Thursday, Oct 8, 2026',
        time: '3:00 PM EST',
        topic: 'Custom Peri-Workout Leucine & Electrolyte Protocol',
        status: 'Confirmed'
      }
    ]
  }
};

window.NOURISH_DATA = NOURISH_DATA;
