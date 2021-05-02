namespace Aufgabe_2_2 {
    //Aufgabe 1

    //b)
    let x: number = 5;

    function isEven(_x: number): boolean {
        if (_x == 0) {
            return true;
        }
        if (_x == 1) {
            return false;
        }

        return isEven(_x - 2);
    }
    console.log(isEven(x));

    //Bei -1 bricht die Funktion zusammen, da die Bedingung "_x-2" immer ausgeführt wird.
    //Dadurch wird das Ergebnis nie "0" oder "1" und es kann nicht "true" oder "false" ausgegeben werden.
    //

    //a)

    function min(_emptyArray: number[]): number {
        let minimum: number = _emptyArray[0];
        for (let i: number = 0; i < _emptyArray.length; i++) {
            if (minimum > _emptyArray[i]) {
                minimum = _emptyArray[i];
            }
        }
        return minimum;
    }
    console.log(min([5, 42, 17, 2018, -10, 60, -10010]));

    //c)
    interface Student {
        firstname: string;
        lastname: string;
        age: number;
        studentId: number;
    }
    let s1: Student = createStudent("Alice", "Wonderland", 24, 1234);
    let s2: Student = createStudent("Daphne", "Bridgerton", 20, 5678);
    let s3: Student = createStudent("Lady", "Whistledown", 18, 8975);

    console.log(s1.firstname);
    console.log(s2.studentId);
    console.log(s3.lastname);



    function createStudent(_firstname: string, _lastname: string, _age: number, _studentID: number): Student {
        let s: Student = { firstname: _firstname, lastname: _lastname, age: _age, studentId: _studentID };
        return s;
    }
    let studentArray: Student[] = [];
    studentArray.push(s1);
    studentArray.push(s2);
    studentArray.push(s3);
    studentArray.push({ firstname: "Max", lastname: "Mustermann", age: 19, studentId: 6589 });

    function showInfo(s: Student): void {
        console.log(s.lastname);
        console.log(s.studentId);

    }
    showInfo(s1);
    showInfo(s2);
    showInfo(s3);
    showInfo(studentArray[3]);

    // class Student {
    //     firstname: string;
    //     lastname: string;
    //     age: number;
    //     studentId: number;

    //     constructor(_firstname: string, _lastname: string, _age: number, _studentId: number) {
    //         this.firstname = _firstname;
    //         this.lastname = _lastname;
    //         this.age = _age;
    //         this.studentId = _studentId;
    //     }

    //     showInfo(_student: Student): void {
    //         console.log("Name:" _student.firstname + "Lastname:" _student.lastname + "Age:" _student.age + "Student ID": _student.studentId);
    //     }

    // }

    //Aufgabe 2
    //a)
    let arr: number[] = [5, 42, 17, 2018, -10, 60, -10010];
    function backwards(_input: number[]): number[] {
        let arr: number[] = new Array;
        for (let i: number = _input.length - 1; i >= 0; i--) {
            arr.push(_input[i]);
        }
        return arr;
    }
    console.log(backwards(arr));


    //b)
    let even: number[] = [12, 14, 16, 18];
    let uneven: number[] = [11, 23, 35, 47];
    function join(_array1: number[], _array2: number[]): void {
        let joinNumbers: number[] = _array1.concat(_array2);
        console.log(joinNumbers);
    }
    join(even, uneven);

    //c)
    let index1: number = 0;
    let index2: number = 4;

    function split(_arr: number[], _index1: number, _index2: number): number[] {

        return _arr.slice(_index1, _index2);
    }
    console.log(split(arr, index1, index2));


    //Aufgabe 3
    //a)
    let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("myFirstCanvas");
    let context: CanvasRenderingContext2D = canvas.getContext("2d");

    context.lineWidth = 10;

    //Himmel & Boden
    context.fillStyle = "#C2F2F1";
    context.fillRect(5, 5, 600, 300);
    context.fillStyle = "#2A5737";
    context.fillRect(5, 300, 600, 80);

    //Haus
    context.fillStyle = "#FC03D7";         //Gebäude
    context.fillRect(100, 150, 150, 150);
    context.beginPath();                  //Tür
    context.fillStyle = "#D97D04";
    context.fillRect(150, 230, 50, 70);
    context.fill();
    context.beginPath();                 //Fenster links
    context.fillStyle = "#1811ED";
    context.fillRect(110, 160, 50, 50);
    context.fill();
    context.beginPath();                 //Fenster rechts
    context.fillStyle = "#1811ED";
    context.fillRect(190, 160, 50, 50);
    context.fill();
    context.beginPath();                  //Dach
    context.fillStyle = "#F20A0A";
    context.moveTo(175, 50);
    context.lineTo(100, 150);
    context.lineTo(250, 150);
    context.closePath();
    context.fill();

    //Wolke
    context.beginPath();
    context.arc(50, 50, 15, 0, Math.PI * 2);
    context.fillStyle = "#FFFFFF";
    context.fill();
    context.beginPath();
    context.arc(75, 50, 20, 0, Math.PI * 2);
    context.fillStyle = "#FFFFFF";
    context.fill();
    context.beginPath();
    context.arc(100, 50, 15, 0, Math.PI * 2);
    context.fillStyle = "#FFFFFF";
    context.fill();

    //Baum
    context.fillStyle = "#8B4513";             //Stamm
    context.fillRect(350, 100, 50, 200);
    context.beginPath();                      //Krone
    context.arc(375, 100, 70, 0, Math.PI * 2);
    context.fillStyle = "#0FD10F";
    context.fill();

    //b)
    let canvas2: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("mySecondCanvas");

    let context2: CanvasRenderingContext2D = canvas2.getContext("2d");

    context2.lineWidth = 10;
    class Rectangle {
        xNumber: number;
        yNumber: number;
        width: number;
        height: number;

        //c)
        constructor() {
            this.createRect(); 
        }

        createRect(): void {
            this.xNumber = Math.random() * 501; 
            this.yNumber = Math.random() * 401; 
            this.width = Math.random() * 200;
            this.height = Math.random() * 200;
        }
        
        //d)
        drawRect(): void {
            context2.fillRect(this.xNumber, this.yNumber, this.width, this.height);
        }
    }
    //e)
    let rectArray: Rectangle[] = [];
    for (let i: number = 0; i < 16; i++) {
        rectArray.push(new Rectangle);
        rectArray[i].drawRect();
    }








}










