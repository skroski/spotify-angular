import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
   <p data-testid="title">{{ title }}</p>
    <div class="navbar bg-base-100">
      <div class="navbar-start">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
            <svg
              width="201"
              height="61"
              viewBox="0 0 201 61"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30.083 0.0992432C13.519 0.0992432 0.0905151 13.5309 0.0905151 30.0994C0.0905151 46.6686 13.519 60.0992 30.083 60.0992C46.6488 60.0992 60.0758 46.6686 60.0758 30.0994C60.0758 13.532 46.6488 0.100676 30.0826 0.100676L30.083 0.0992432ZM43.8373 43.3681C43.3001 44.2494 42.1469 44.5288 41.2658 43.9879C34.2239 39.6854 25.359 38.7109 14.919 41.0968C13.9129 41.3261 12.9101 40.6956 12.6809 39.6889C12.4506 38.6823 13.0784 37.6792 14.087 37.4499C25.5119 34.839 35.3119 35.9632 43.2177 40.7959C44.0988 41.3369 44.3781 42.4868 43.8373 43.3681ZM47.5083 35.1994C46.8314 36.2999 45.3917 36.6474 44.2922 35.9703C36.2302 31.0137 23.9411 29.5782 14.4054 32.4735C13.1687 32.8472 11.8625 32.15 11.4872 30.9151C11.1147 29.6781 11.812 28.3741 13.0466 27.998C23.9389 24.6921 37.4802 26.2934 46.7383 31.9842C47.8378 32.6612 48.1852 34.101 47.5083 35.1994ZM47.8235 26.6932C38.1571 20.9502 22.2087 20.4221 12.9796 23.224C11.4976 23.6736 9.9303 22.8367 9.48118 21.3543C9.03206 19.8712 9.86798 18.3046 11.3511 17.8539C21.9455 14.6368 39.5574 15.2584 50.6866 21.8669C52.0225 22.6583 52.4594 24.3804 51.6679 25.712C50.88 27.0454 49.1537 27.4849 47.825 26.6932H47.8235ZM81.6901 27.7938C76.5112 26.5585 75.5908 25.6916 75.5908 23.8699C75.5908 22.1489 77.2096 20.9907 79.62 20.9907C81.9551 20.9907 84.2688 21.8702 86.697 23.6807C86.7686 23.7356 86.8617 23.7574 86.9513 23.7431C87.0444 23.7295 87.1232 23.6797 87.1769 23.6048L89.7054 20.0395C89.8093 19.8927 89.7807 19.6902 89.641 19.5781C86.7507 17.2592 83.4987 16.1318 79.6952 16.1318C74.1045 16.1318 70.1971 19.4882 70.1971 24.2905C70.1971 29.4403 73.5673 31.2637 79.3908 32.6713C84.344 33.813 85.182 34.7695 85.182 36.4791C85.182 38.3742 83.4916 39.5528 80.7696 39.5528C77.7469 39.5528 75.2792 38.5318 72.5215 36.1459C72.4534 36.085 72.3603 36.0599 72.2743 36.0635C72.1812 36.0707 72.0988 36.1136 72.0415 36.1817L69.205 39.5564C69.0868 39.6997 69.1011 39.9075 69.2372 40.0293C72.4463 42.8952 76.3931 44.407 80.655 44.407C86.6791 44.407 90.5722 41.1147 90.5722 36.0169C90.5829 31.7155 88.0078 29.3331 81.7008 27.7984L81.6901 27.7938ZM104.203 22.6852C101.592 22.6852 99.4507 23.7141 97.6814 25.8223V23.4493C97.6814 23.262 97.531 23.1093 97.3448 23.1093H92.7067C92.5205 23.1093 92.3701 23.262 92.3701 23.4493V49.8165C92.3701 50.0028 92.5205 50.1569 92.7067 50.1569H97.3448C97.531 50.1569 97.6814 50.0028 97.6814 49.8165V41.4945C99.4507 43.4756 101.592 44.4464 104.203 44.4464C109.056 44.4464 113.97 40.7099 113.97 33.5669C113.977 26.4224 109.063 22.6848 104.207 22.6848L104.203 22.6852ZM108.576 33.5669C108.576 37.2027 106.338 39.7427 103.129 39.7427C99.9593 39.7427 97.5668 37.0881 97.5668 33.5669C97.5668 30.0453 99.9593 27.3914 103.129 27.3914C106.284 27.3911 108.576 29.988 108.576 33.5669ZM126.559 22.6852C120.309 22.6852 115.413 27.4986 115.413 33.6446C115.413 39.7248 120.277 44.4858 126.484 44.4858C132.755 44.4858 137.665 39.6889 137.665 33.5669C137.665 27.4656 132.787 22.6859 126.559 22.6859V22.6852ZM126.559 39.7785C123.235 39.7785 120.728 37.106 120.728 33.5651C120.728 30.0081 123.149 27.4269 126.484 27.4269C129.829 27.4269 132.35 30.0983 132.35 33.6428C132.35 37.1991 129.915 39.7785 126.559 39.7785ZM151.01 23.1093H145.906V17.8911C145.906 17.7041 145.756 17.5515 145.57 17.5515H140.931C140.745 17.5515 140.591 17.7041 140.591 17.8911V23.1093H138.364C138.177 23.1093 138.027 23.262 138.027 23.4493V27.4355C138.027 27.6225 138.177 27.7755 138.364 27.7755H140.591V38.0912C140.591 42.2576 142.665 44.3712 146.759 44.3712C148.42 44.3712 149.799 44.0273 151.099 43.2893C151.207 43.232 151.271 43.1173 151.271 42.9955V39.1981C151.271 39.0835 151.21 38.9724 151.11 38.9115C151.01 38.8471 150.884 38.8435 150.781 38.8972C149.889 39.345 149.026 39.5528 148.059 39.5528C146.572 39.5528 145.906 38.8757 145.906 37.3639V27.7773H151.01C151.196 27.7773 151.346 27.6247 151.346 27.4373V23.4515C151.354 23.2641 151.203 23.1115 151.013 23.1115L151.01 23.1093ZM168.788 23.1298V22.4889C168.788 20.6034 169.512 19.7626 171.131 19.7626C172.098 19.7626 172.875 19.9546 173.745 20.2448C173.853 20.2785 173.964 20.2616 174.05 20.1975C174.139 20.1334 174.189 20.0306 174.189 19.9217V16.0132C174.189 15.8638 174.096 15.7316 173.949 15.6876C173.032 15.4142 171.858 15.1337 170.096 15.1337C165.816 15.1337 163.549 17.5461 163.549 22.1077V23.0893H161.321C161.135 23.0893 160.981 23.2419 160.981 23.4289V27.4355C160.981 27.6225 161.135 27.7755 161.321 27.7755H163.549V43.6834C163.549 43.8732 163.703 44.0237 163.889 44.0237H168.523C168.713 44.0237 168.864 43.8732 168.864 43.6834V27.7766H173.194L179.826 43.6834C179.074 45.3528 178.333 45.686 177.323 45.686C176.506 45.686 175.643 45.4424 174.766 44.9587C174.683 44.9157 174.583 44.9086 174.497 44.9336C174.408 44.9659 174.332 45.0304 174.297 45.1163L172.724 48.5663C172.649 48.731 172.714 48.9209 172.871 49.0069C174.512 49.8953 175.991 50.2751 177.821 50.2751C181.245 50.2751 183.139 48.6773 184.805 44.3855L192.849 23.594C192.892 23.4894 192.877 23.3712 192.813 23.2784C192.752 23.1864 192.648 23.1308 192.537 23.1308H187.709C187.562 23.1308 187.434 23.2229 187.387 23.3587L182.441 37.4857L177.026 23.3494C176.976 23.2179 176.85 23.1308 176.711 23.1308H168.788V23.1298ZM158.481 23.1093H153.843C153.657 23.1093 153.503 23.262 153.503 23.4493V43.6834C153.503 43.8732 153.657 44.0237 153.843 44.0237H158.481C158.667 44.0237 158.821 43.8732 158.821 43.6834V23.4507C158.821 23.2634 158.671 23.1108 158.481 23.1108V23.1093ZM156.189 13.8956C154.351 13.8956 152.861 15.3831 152.861 17.2205C152.861 19.059 154.351 20.5482 156.189 20.5482C158.026 20.5482 159.512 19.059 159.512 17.2205C159.512 15.3834 158.022 13.8956 156.189 13.8956ZM196.81 29.6154C194.976 29.6154 193.547 28.1413 193.547 26.3511C193.547 24.5609 194.994 23.0699 196.828 23.0699C198.662 23.0699 200.091 24.5438 200.091 26.3325C200.091 28.1226 198.644 29.6154 196.81 29.6154ZM196.828 23.3945C195.155 23.3945 193.891 24.7236 193.891 26.3511C193.891 27.9779 195.148 29.2891 196.81 29.2891C198.482 29.2891 199.747 27.9611 199.747 26.3325C199.747 24.7057 198.49 23.3945 196.828 23.3945ZM197.551 26.6681L198.475 27.9607H197.694L196.864 26.7749H196.151V27.9607H195.499V24.5344H197.025C197.823 24.5344 198.346 24.9418 198.346 25.6274C198.35 26.1892 198.024 26.5324 197.555 26.6681H197.551ZM197 25.1223H196.151V26.206H197C197.422 26.206 197.677 25.9986 197.677 25.6636C197.677 25.3111 197.422 25.1223 197 25.1223Z"
                fill="#1ED760"
              />
            </svg>
          </div>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li><a>Item 1</a></li>
           
          </ul>
        </div>
        <a class="btn btn-ghost text-xl">
        {{ title }}
        </a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <li>
            <button data-testbuttonid='botao'>{{ label }}</button></li>
          
        </ul>
      </div>
      <div class="navbar-end">
        <a class="btn btn-success" (click)="abrirLogin()">Abrir meu Spotify</a>
      </div>
    </div>
  `,
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  private spotifyService = inject(SpotifyService);
  private router = inject(Router);
  public title = 'Dashboard'

  @Input() label: string = '';
  @Output('labelChange') labelChange = new EventEmitter;

  onClick(){
    this.labelChange.emit();
  }

  ngOnInit(): void {
    this.verificarTokenUrlCallback();
  }
  verificarTokenUrlCallback() {
    const token = this.spotifyService.obterTokenUrlCallback();
    if (!!token) {
      this.spotifyService.defineAccessToken(token);
      this.router.navigate(['/player/home']);
    }
    // else{
    //   this.router.navigate(['/login'])
    // }
    console.log(token);
  }
  abrirLogin() {
    window.location.href = this.spotifyService.obterUrlLogin();
  }
}
