import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipebookComponentComponent } from './recipebook-component.component';

describe('RecipebookComponentComponent', () => {
  let component: RecipebookComponentComponent;
  let fixture: ComponentFixture<RecipebookComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipebookComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipebookComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
