document.addEventListener("DOMContentLoaded", function () {
    const numberInput = document.getElementById("number-input");
    const statTypeSelect = document.getElementById("stat-type");
    const calculateButton = document.getElementById("calculate-button");
    const resultContainer = document.getElementById("result-container");
    const resultElement = document.getElementById("result");

    calculateButton.addEventListener("click", function () {
        const numbers = numberInput.value.split(",").map(Number);
        const selectedStat = statTypeSelect.value;
        let result;

        switch (selectedStat) {
            case "mean":
                result = calculateMean(numbers);
                break;
            case "median":
                result = calculateMedian(numbers);
                break;
            case "mode":
                result = calculateMode(numbers);
                break;
            case "sum":
                result = calculateSum(numbers);
                break;
            case "minimum":
                result = calculateMinimum(numbers);
                break;
            case "range":
                result = calculateRange(numbers);
                break;
            default:
                result = "Invalid statistic selected";
        }
        

        resultElement.textContent = result;
        resultContainer.style.display = "block";
    });

    function calculateMean(numbers) {
    if (numbers.length === 0) {
        return "No numbers entered";
    }

    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
    const mean = sum / numbers.length;
    return `Mean: ${mean.toFixed(2)}`; // Round to 2 decimal places
    }


    function calculateMedian(numbers) {
        if (numbers.length === 0) {
            return "No numbers entered";
        }
    
        numbers.sort((a, b) => a - b); // Sort the numbers in ascending order
    
        if (numbers.length % 2 === 0) {
            // If the number of elements is even, median is the average of the middle two numbers
            const middle1 = numbers[numbers.length / 2 - 1];
            const middle2 = numbers[numbers.length / 2];
            const median = (middle1 + middle2) / 2;
            return `Median: ${median.toFixed(2)}`; // Round to 2 decimal places
        } else {
            // If the number of elements is odd, median is the middle number
            const median = numbers[Math.floor(numbers.length / 2)];
            return `Median: ${median}`;
        }
    }
    

    function calculateMode(numbers) {
        if (numbers.length === 0) {
            return "No numbers entered";
        }
    
        const numCount = {};
    
        // Count the frequency of each number 
        for (const num of numbers) {
            numCount[num] = (numCount[num] || 0) + 1;
        }
    
        let mode;
        let maxCount = 0;
    
        // Find the number with the highest frequency (mode)
        for (const num in numCount) {
            if (numCount[num] > maxCount) {
                mode = num;
                maxCount = numCount[num];
            }
        }
    
        if (maxCount === 1) {
            return "No mode (all numbers occur once)";
        }
    
        return `Mode: ${mode}`;
    }

    function calculateSum(numbers) {
        if (numbers.length === 0) {
            return "No numbers entered";
        }
    
        const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
        return `Sum: ${sum}`;
    }

    function calculateMinimum(numbers) {
        if (numbers.length === 0) {
            return "No numbers entered";
        }
    
        const minimum = Math.min(...numbers);
        return `Minimum: ${minimum}`;
    }

    function calculateRange(numbers) {
        if (numbers.length === 0) {
            return "No numbers entered";
        }
    
        const minimum = Math.min(...numbers);
        const maximum = Math.max(...numbers);
        const range = maximum - minimum;
        return `Range: ${range}`;
    }
    
    
});
