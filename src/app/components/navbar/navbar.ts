import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {NgClass} from '@angular/common';
import { NavLinkModel } from './navLink-model';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    NgClass
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  protected isMenuOpen: boolean = false;

  protected navLinks: NavLinkModel[] = [
    {path: '/', label: "Home"},
    {path: '/about', label: "About"},
    {path: '/projects', label: "Projects"},
    {path: '/contact', label: "Contact"},
  ]

  constructor(private router: Router) {}

  protected toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  protected closeMenu(): void {
    this.isMenuOpen = false;
  }

  protected isActive(path: string): boolean {
    if (path === '/') {
      return this.router.url === '/';
    }
    return this.router.url.startsWith(path);
  }

}
