class person {

    constructor(name, job, age) {
        this.name = name;
        this.age = age;
        this.job = job;
    }


    exercise() {

        console.log(`${this.name} is flying`);
    }
    fetchJob() {

        console.log(`${this.name} is a ${this.job}`)
    }
    completeTask() {
        this.busy = false;
    }
    acceptNewTask() {
        this.busy = true;
    }
    offerNewTask() {
        if (this.busy) {
            console.log(`${this.name} can’t accept any new tasks right now.`);
        } else {
            console.log(`${this.name} would love to take on a new responsibility.`);
        }
    }
    learnLanguage(language) {
        this.languages.push(language);
    }
    listLanguages() {
        console.log(`${this.name} knows: ${this.languages.join(' ')}`);
    }

}

const person1 = new person('Rachel', 'back-end developer', 25);
person1.fetchJob();
person1.exercise();
const person2 = new person('Mike', 'front-end developer', 65);
person2.fetchJob()

const person3 = new person('Steve', 'Talk show host', 66);
person3.fetchJob()
person3.exercise();
person3.fetchJob();
person3.offerNewTask();
person3.completeTask();
person3.offerNewTask();
person3.learnLanguage('TypeScript');
person3.listLanguages();

