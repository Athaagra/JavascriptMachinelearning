class LinearRegression{
	constructor(features, labels, options){
		this.features = features;
		this.labels = labels;
		
		this.options = Object.assign(
			{ learningRate: 0.1, iterations: 1000},
			options
		);
		this.m=0;
		this.b=0;
	}
	
	gradeientDescent(){
		const currentGuessesForMPG = this.features.map(row => {
			return this.m * row[0] + this.b;
		});
	
	}
	
	train() {
		for (let i=0; i < this.options.iterations; i++){
			this.gradientDescent();
		}
	}	
}
