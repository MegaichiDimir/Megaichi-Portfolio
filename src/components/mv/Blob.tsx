

// Generated SVG by https://superdesigner.co/tools/blob-generator
// Type: Regular | Edges: 6 | Smoothness: 6

const dAttributeList = [
	'M79.5,64.5Q67,79,51,78Q35,77,25.5,63.5Q16,50,23.5,33.5Q31,17,51.5,14.5Q72,12,82,31Q92,50,79.5,64.5Z',
	'M75,65Q68,80,47,85.5Q26,91,19,70.5Q12,50,21,33Q30,16,50,15.5Q70,15,76,32.5Q82,50,75,65Z',
	'M83,68.5Q71,87,49,88.5Q27,90,21,70Q15,50,22,32Q29,14,49.5,14.5Q70,15,82.5,32.5Q95,50,83,68.5Z',
	'M81,68.5Q72,87,51,85.5Q30,84,22.5,67Q15,50,21,30Q27,10,50,10Q73,10,81.5,30Q90,50,81,68.5Z',
	'M80.5,65.5Q68,81,46.5,87Q25,93,18.5,71.5Q12,50,23.5,36.5Q35,23,51,22Q67,21,80,35.5Q93,50,80.5,65.5Z',
	'M79.5,70.5Q74,91,54,84Q34,77,26.5,63.5Q19,50,23,30Q27,10,50.5,9.5Q74,9,79.5,29.5Q85,50,79.5,70.5Z',
	'M81,64Q66,78,48,81.5Q30,85,21,67.5Q12,50,23.5,36.5Q35,23,54,16.5Q73,10,84.5,30Q96,50,81,64Z',
	'M81,64.5Q67,79,48,82.5Q29,86,18.5,68Q8,50,16.5,28.5Q25,7,45.5,14Q66,21,80.5,35.5Q95,50,81,64.5Z',
	'M74.5,63.5Q66,77,46.5,83.5Q27,90,20,70Q13,50,19,28.5Q25,7,47.5,11.5Q70,16,76.5,33Q83,50,74.5,63.5Z',
	'M76.5,69.5Q72,89,50,88.5Q28,88,18,69Q8,50,20,34Q32,18,49,20Q66,22,73.5,36Q81,50,76.5,69.5Z',
	'M77,69Q72,88,53.5,82Q35,76,25.5,63Q16,50,24,34.5Q32,19,51.5,16.5Q71,14,76.5,32Q82,50,77,69Z',
	'M83.5,67Q70,84,48.5,87Q27,90,20,70Q13,50,23,35Q33,20,49.5,21Q66,22,81.5,36Q97,50,83.5,67Z',
	'M82.5,69.5Q72,89,53,83Q34,77,25,63.5Q16,50,21,29.5Q26,9,46.5,14.5Q67,20,80,35Q93,50,82.5,69.5Z',
	'M84,68Q71,86,50.5,85.5Q30,85,23.5,67.5Q17,50,24,34Q31,18,52.5,13Q74,8,85.5,29Q97,50,84,68Z',
	'M80,67Q70,84,47.5,88.5Q25,93,19.5,71.5Q14,50,22.5,34Q31,18,51.5,14.5Q72,11,81,30.5Q90,50,80,67Z',
	'M76.5,64Q66,78,49,79.5Q32,81,18.5,65.5Q5,50,18,33Q31,16,51.5,13.5Q72,11,79.5,30.5Q87,50,76.5,64Z',
	'M85,69.5Q73,89,49.5,90.5Q26,92,19,71Q12,50,22,35Q32,20,53,14.5Q74,9,85.5,29.5Q97,50,85,69.5Z',
	'M77.5,64.5Q67,79,47.5,83.5Q28,88,21,69Q14,50,24,36.5Q34,23,51.5,20Q69,17,78.5,33.5Q88,50,77.5,64.5Z',
	'M80,65Q67,80,48,83Q29,86,22,68Q15,50,23.5,34.5Q32,19,50.5,18Q69,17,81,33.5Q93,50,80,65Z',
	'M85,68Q71,86,49,88Q27,90,20.5,70Q14,50,23.5,35.5Q33,21,53.5,15Q74,9,86.5,29.5Q99,50,85,68Z'
]

// Fisher-Yates shuffle
const shuffleArray = (array: any[]) => {
	const copiedArray = array.slice();
	for (let i = copiedArray.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[copiedArray[i], copiedArray[j]] = [copiedArray[j], copiedArray[i]];
	}
	return copiedArray;
}

const Blob = ({ className }: { className: string }) => {
	const randomD = shuffleArray(dAttributeList)
	const dValues = randomD.join('; ').concat(`; ${randomD[0]}`)

	return (
		<>
			<div className={`relative w-full ${className}`}>
				<svg viewBox="0 0 100 100" className="absolute top-0 left-0 w-full h-auto transition-colors">
					<path d={randomD[0]}>
						<animate
							attributeName="d"
							dur="200s"
							repeatCount="indefinite"
							calcMode="spline"
							keyTimes="0; 0.05; 0.1; 0.15; 0.2; 0.25; 0.3; 0.35; 0.4; 0.45; 0.5; 0.55; 0.6; 0.65; 0.7; 0.75; 0.8; 0.85; 0.9; 0.95; 1"
							keySplines="0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1"
							values={dValues}
						/>
					</path>
				</svg>
			</div>
		</>
	)
}

export default Blob;