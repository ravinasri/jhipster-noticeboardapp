import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'author',
        loadChildren: () => import('./author/author.module').then(m => m.JhipsterNoticeBoardAppAuthorModule),
      },
      {
        path: 'board',
        loadChildren: () => import('./board/board.module').then(m => m.JhipsterNoticeBoardAppBoardModule),
      },
      {
        path: 'notice',
        loadChildren: () => import('./notice/notice.module').then(m => m.JhipsterNoticeBoardAppNoticeModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class JhipsterNoticeBoardAppEntityModule {}
