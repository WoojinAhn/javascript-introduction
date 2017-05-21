/**
 * # ����
 * - ��ü �ν��Ͻ��� Ÿ���� ������ �̸����� �ĺ�����.
 *
 * # ����
 * - ��ü �ν��Ͻ��� �����ø��� �޼��尡 �ߺ� ������.
 */
var johnCar,
    janeCar;

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.sayCar = function() {
        console.log('I have a ' + this.year + ' ' + this.make + ' ' + this.model + '.');
    };
}

// create 2 car objects for John and Jane
johnCar = new Car('Ford', 'F150', '2011');
janeCar = new Car('Audi', 'A4', '2007');

// call method
johnCar.sayCar(); // ==> I have a 2011 Ford F150.
janeCar.sayCar(); // ==> I have a 2007 Audi A4.
