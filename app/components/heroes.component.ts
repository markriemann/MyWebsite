import {Component} from 'angular2/core';
import {Hero} from '../interfaces/hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from '../services/hero.service';
import {OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

@Component({
    selector: 'my-heroes',
    templateUrl: './app/templates/heroes.component.html',
    styleUrls: ['./app/styles/heroes.component.css'],
    directives: [HeroDetailComponent],
})

export class HeroesComponent implements OnInit {
    public selectedHero: Hero;
    public heroes: Hero[];

    constructor(
        private _heroService: HeroService,
        private _router: Router
    ) {
    }
    ngOnInit() {
        this.getHeroes();
    }
    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }
    getHeroes() {
    //  this._heroService.getHeroes().then(heroes => this.heroes = heroes);
        this._heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
    }
    gotoDetail() {
        let link = ['HeroDetail', { id: this.selectedHero.id }];
        this._router.navigate(link);
    }    
}
