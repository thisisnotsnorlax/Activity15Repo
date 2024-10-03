import { Component } from '@angular/core';
import { Carmodel } from './carmodel';

@Component({
  selector: 'app-carmodel',
  templateUrl: './carmodel.component.html',
  styleUrl: './carmodel.component.css',
})
export class CarmodelComponent {
  name = '';
  selectedCar!: Carmodel | undefined;

  cars: Carmodel[] = [
    {
      carId: 1,
      carName: 'Toyota',
      brand: 'Corolla',
    },
    {
      carId: 2,
      carName: 'Ford',
      brand: 'Mustang',
    },
    {
      carId: 3,
      carName: 'Honda',
      brand: 'Civic',
    },
    {
      carId: 4,
      carName: 'Chevrolet',
      brand: 'Camaro',
    },
    {
      carId: 5,
      carName: 'Audi',
      brand: 'A4',
    },
  ];

  fetchCar(): void {
    this.selectedCar = this.cars.find(
      (car) => car.carName.toLowerCase() === this.name
    );
  }
}
