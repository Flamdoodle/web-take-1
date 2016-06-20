/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { NavigationService } from '../navigation.service';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { LeftNavComponent } from './left-nav.component';
import { NavigationService} from '../navigation.service'


describe('Component: LeftNav', () => {
  it('should create an instance', () => {
<<<<<<< HEAD
    let service = new NavigationService();
=======
    let service = new NavigationService;
>>>>>>> 17c220a684bb8a3ca6bd232472dd1fd24c2c3e7c
    let component = new LeftNavComponent(service);
    expect(component).toBeTruthy();
  });
});

