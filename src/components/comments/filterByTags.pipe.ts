import { Pipe, PipeTransform } from 'angular-ts-decorators';

@Pipe({name: 'filterByTags'})
export class FilterByTagsPipe implements PipeTransform {
  public transform(comments: any, tags: any) {
    if (!tags.length) return comments;
    function check(comment) {
      let filterArray = tags.map((tag: any) => tag.text);
      let findCount = filterArray
        .map((tag) => comment.tags.indexOf(tag) > -1 ? 1 : 0)
        .reduce((prev, curr) => prev + curr);
      return findCount === filterArray.length;
    }
    return comments.filter(check);
  }
}
