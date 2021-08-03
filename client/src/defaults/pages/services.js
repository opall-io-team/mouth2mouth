const faq = require('./faq')

// [EXPORT] //
module.exports = {
	faq: faq,
	
	title: 'Our Services',

	services: [
		{
			id: 'reiki',
			title: 'Reiki Energy Healing for Mind, Body, Spirit',
			description: 'Today many people are in great need of healing and/or relief from illnesses, past traumas, stress, and addictions. Reiki is healing energy in its truest sense for the mind, body, and spirit. As a Reiki practitioner, I channel life energy through their hands to the recipient. This energy activates the body’s natural ability to heal itself. The energy goes to the deepest levels of a person’s being, where illnesses have their origin. It works wherever the recipient needs it most, releasing blocked energies, cleansing the body of toxins, and working to create a state of balance.',
			processSteps: [
				'Consultation 10-15 mins (first visit may be longer) on any health concerns',
				'You will be provided an assessment sheet so that we could measure your progress.',
				'You will be asked to lay flat on the table and to get relaxed and to close your eyes. (Most people fall asleep, either way healing is happening). ',
				'Sound healing is conducted during the session to aid in relaxation and healing on the cell molecular level.',
			],
		},
		{
			id: 'chakra-balancing',
			title: 'Chakra Balancing',
			description: 'Chakra balancing is the process of restoring a harmonious flow of energy across the chakra system. The effect of well-balanced chakras often translates into a feeling of balanced well-being, relaxation, centeredness, increased vitality, and embodiment of oneself.  Most of us have energetic blocks and imbalances as well as energy-sabotaging habits that prevent us from accessing our full vitality, which leads us to feel exhausted, scattered, dull… even ill. Chakra Clearing and Balancing are necessary to balance the other operating systems in one\'s body.',
			processSteps: []
		},
		{
			id: 'crystal-healing',
			title: 'Crystal Healing',
			description: 'Crystal healing is an alternative medical technique in which crystals and other stones are used to cure ailments and protect against disease. Proponents of this technique believe that crystals act as conduits for healing — allowing positive, healing energy to flow into the body as negative, disease-causing energy flows out.  During a treatment session, I may place various crystals on your body along with the chakra points or roughly in the regions. The stones are positioned in chosen areas for the reported by the patient or what may show through my intuition.',
			processSteps: []
		},
		{
			id: 'foot-detox-and-spa',
			title: 'Foot Detox and Spa',
			description: 'Toxins can accumulate in the body from a wide range of sources, such as parasites, heavy metals, and other toxic substances. These toxins can contribute to disorders that have vibrational frequencies that interfere with the natural polarity and oscillation of the healthy cells in the body. This disruption can cause an imbalance in the healthy cells and interfere with the natural healing power of the body. Some of the symptoms that you may have toxins in the body include digestive problems, headaches, constipation, bad breath, poor circulation, weight gain or obesity, acne, allergies, cellulite, and forgetfulness.'
			,
			processSteps: []
		},
		{
			id: 'oracle-card-readings',
			title: 'Oracle Card Readings',
			description: '',
			processSteps: []
		},
		{
			id: 'essential-oils',
			title: 'Essential Oils',
			description: '',
			processSteps: []
		},
		{
			id: 'kengen-water',
			title: 'Kengen Water',
			description: '',
			processSteps: []
		},
		{
			id: 'reiki-charged-wellness-products',
			title: 'Reiki-charged Wellness Products',
			description: '',
			processSteps: []
		},
	]
}