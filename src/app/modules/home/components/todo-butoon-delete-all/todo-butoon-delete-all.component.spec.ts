import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoButoonDeleteAllComponent } from './todo-butoon-delete-all.component';

describe('TodoButoonDeleteAllComponent', () => {
  let component: TodoButoonDeleteAllComponent;
  let fixture: ComponentFixture<TodoButoonDeleteAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoButoonDeleteAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoButoonDeleteAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
