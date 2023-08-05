import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.less']
})
export class ContentComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'About',content:"<p> Highly skilled Python developer with expertise in data processing, pipeline creation, automation, and web development.Proficient in leveraging Python libraries and frameworks to transform raw data into valuable insights. Experienced in designing and implementing data pipelines, streamlining workflows, and automating repetitive tasks to optimize      processes. Adept at building dynamic and interactive web applications using Python web frameworks. Strong problem-solving skills and a commitment to continuous learning drive impactful contributions to software development projects.</p>", cols: 2, rows: 1 },
          { title: 'Experience', content: "<h3>AI Engineer - <strong> Bitvivid Solutions Pvt. Ltd.</strong></h3> <p><strong>Duration:</strong> November 2020 - Present</p> <ul> <li>Engaging with team and creating core components of the product</li><li>Writing automation SCripts </li> <li>Designing and implementing the Data pipelines</li><li>Gathering Customer Requirements , understanding them and accomodate them in the product</li> </ul>", cols: 2, rows: 1 },
          { title: 'Skills', cols: 2, rows: 1 },
          { title: 'Education', cols: 2, rows: 1 }
        ];
      }

      return [
        { title: 'About',content:"<p> Highly skilled Python developer with expertise in data processing, pipeline creation, automation, and web development.Proficient in leveraging Python libraries and frameworks to transform raw data into valuable insights. Experienced in designing and implementing data pipelines, streamlining workflows, and automating repetitive tasks to optimize      processes. Adept at building dynamic and interactive web applications using Python web frameworks. Strong problem-solving skills and a commitment to continuous learning drive impactful contributions to software development projects.</p>", cols: 2, rows: 1 },
        { title: 'Experience', content: "<h3>AI Engineer - <strong> Bitvivid Solutions Pvt. Ltd.</strong></h3> <p><strong>Duration:</strong> November 2020 - Present</p>     <ul> <li>Engaging with team and creating core components of the product</li>   <li>Writing automation SCripts </li> <li>Designing and implementing the Data pipelines </li><li>Gathering Customer Requirements , understanding them and accomodate them in the product </li> </ul>" ,cols: 1, rows: 1 },
        { title: 'Skills', cols: 1, rows: 2 },
        { title: 'Education', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
