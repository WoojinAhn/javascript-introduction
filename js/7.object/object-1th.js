/**
 * # ����
 * - �������� ����, �������̸� ����� �����ϴ�.
 *
 * # ����
 * - �ܼ��� ��� �ϳ��� �ν��Ͻ����� �����Ƿ�, ������ ��ü�� �� ������ �� ����.
 */
var Car = {
    make: 'Ford',
    model: 'F150',
    year: '2011',
    sayCar: function() {
        console.log('I have a ' + this.year + ' ' + this.make + ' ' + this.model + '.');
    }
};
Car.sayCar(); // ==> I have a 2011 Ford F150.
