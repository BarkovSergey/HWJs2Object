const me = {
    name: 'Sergey',
    surName: 'Barkov',
    birthday: '29.03.1994',
    cause: 'нужно саморазвиваться и расти!',
    logName(){
        console.log('Имя: ', this.name);
    },
    logSurName(){
        console.log('Фамилия: ', this.surName);
    },
    logBirthday(){
        console.log('Дата рождения: ', this.birthday);
    },
    logCause(){
        console.log(this.name, 'хочет выучить JS потому, что', this.cause);
    },
    logMeInf(){
        this.logName();
        this.logSurName();
        this.logBirthday();
        this.logCause();
    },
    daydream(dream){
        console.log(this.name,'мечтает о',dream);
    }
};

me.logMeInf();
me.daydream('пюрешке с котлеткой!');