                                                        /* Adapter Desing Pattern */

class CelsiusThermometer{

    constructor(celsius){
        this.celsius = celsius
    }

    getTemperature() {
        return this.celsius;
    }

    getUnit(){
        return 'C'
    }
}

class FahrenheitThermometer{

    constructor(fahrenheit){
        this.fahrenheit = fahrenheit
    }

    getTemperature() {
        return this.fahrenheit;
    }

    getUnit(){
        return 'F'
    }
}

class WrongThermometer {
    constructor(wrongUnit) {
        this.wrongUnit = wrongUnit
    }

    getTemperature(){
        return this.wrongUnit
    }
    getUnit(){
        return 'X'
    }
}

class TempratureAdapter{
    constructor(thermometer){
        this.thermometer = thermometer
    }

    getTemperature(){
        const TempTemperature = this.thermometer.getTemperature();
        const UNIT = this.thermometer.getUnit()
        if (UNIT == 'F'){
            //F to C
            return (TempTemperature - 32) * 5/9;
        }
        else if (UNIT == 'C'){
            //C to F
            return (TempTemperature * 9/5) + 32;
        }
        else{
            throw new Error("Wrong Unit");
        }
    }
}

function safeConversion(thermometer) {
    try {
        const adapter = new TempratureAdapter(thermometer);
        console.log(`Original Temperature: ${thermometer.getTemperature()}°${thermometer.getUnit()}`);
        console.log(`Converted Temperature: ${adapter.getTemperature()}°${thermometer.getUnit() === "C" ? "F" : "C"}`);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

// Test Cases
celsiusThermometer = new CelsiusThermometer(10);
fahrenheitThermometer = new FahrenheitThermometer(50);
wrongThermometer = new WrongThermometer(60);

// Perform safe conversions
console.log("** Celsius to Fahrenheit **");
safeConversion(celsiusThermometer);

console.log("\n** Fahrenheit to Celsius **");
safeConversion(fahrenheitThermometer);

// Invalid case
console.log("\n** Invalid Case **");
safeConversion(wrongThermometer);