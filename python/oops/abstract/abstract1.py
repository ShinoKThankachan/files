from abc import ABC,abstractmethod
class vehicle(ABC):
    @abstractmethod
    def tyre(self):
        print('tyre')
class car(vehicle):
    def tyre(self):
        print('4')
class bike(vehicle):
    def tyre(self):
        print('2')
ktm=bike()
ktm.tyre()
        