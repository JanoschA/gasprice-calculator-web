import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent]
    });

    // Mock localStorage.getItem
    spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify({ email: 'test@example.com' }));

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have user email as test@example.com', () => {
    expect(component.user.email).toEqual('test@example.com');
  });
});