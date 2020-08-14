var homework={
    study(){
        console.log(`Study ${this.topic}`);
    }
};

var jsHomework = Object.create(homework);
jsHomework.topic="JS";
jsHomework.study();

var MathHomework = Object.create(homework);
MathHomework.topic="Math";
MathHomework.study();