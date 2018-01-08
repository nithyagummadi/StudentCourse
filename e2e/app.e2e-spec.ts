import { StudentInfoPage } from './app.po';

describe('student-info App', function() {
  let page: StudentInfoPage;

  beforeEach(() => {
    page = new StudentInfoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
