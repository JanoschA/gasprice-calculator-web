import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { GpcComponent } from './gpc.component';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { User } from './User';

describe('GpcComponent', () => {
  let component: GpcComponent;
  let fixture: ComponentFixture<GpcComponent>;

  const mockActivatedRoute = {
    queryParamMap: of({ get: (key: string) => 'value' })
  };

  const mockRouter = {
    navigate: jasmine.createSpy('navigate').and.returnValue(Promise.resolve())
  };

  const mockAuthService = {
    updateUser: jasmine.createSpy('updateUser').and.returnValue(Promise.resolve())
  };

  const mockUser: User = {
    id: '',
    name: '',
    email: '',
    imageUrl: '',
    emailVerified: false,
    providerId: ''
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, RouterTestingModule ],
      declarations: [ GpcComponent ],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: Router, useValue: mockRouter },
        { provide: AuthService, useValue: mockAuthService },
        { provide: HttpClient, useValue: { get: () => of(mockUser) } }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});