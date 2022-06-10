import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalKeyComponent } from './personal-key.component';

describe('PersonalKeyComponent', () => {
  let component: PersonalKeyComponent;
  let fixture: ComponentFixture<PersonalKeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalKeyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
