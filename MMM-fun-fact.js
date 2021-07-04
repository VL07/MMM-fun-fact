Module.register("MMM-fun-fact",{
	// Default module config.
	defaults: {
		header: "",
        updateInterval: 30000,
        fadeSpeed: 4000
	},

    lastFactIndex = -1,

    start: function() {
        setInterval(() => {
            this.updateDom(this.config.fadeSpeed)
        }, this.config.updateInterval)
    },

    randomFact: function() {
        const facts = ["test", "test 2"]

        if (facts.length === 1) {
            return 0
        }

        const generate = function() {
            return Math.floor(Math.random() * facts.length)
        }

        let factIndex = generate()

        while (factIndex === this.lastFactIndex) {
            factIndex = generate()
        }

        this.lastFactIndex = factIndex

        return facts[factIndex]
    },

	// Override dom generator.
	getDom: function() {
		var wrapper = document.createElement("div");
        var fact = this.randomFact()
		wrapper.innerHTML = `
            <h2>${this.config.header}</h2>
            <h3>${fact}</h3>
        `;
		return wrapper;
	}
});