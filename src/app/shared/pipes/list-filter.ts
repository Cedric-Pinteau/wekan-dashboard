import { Pipe, PipeTransform } from '@angular/core';
import { List } from 'src/app/models/NameSpace';

@Pipe({
  name: 'listFilter',
  pure: false
})
export class ListFilter implements PipeTransform {

    // generic pipe for any lists. It is called with external filters (wait for boolean callbacks)
    transform(items: any[] | undefined, callback: (item: any) => boolean): any {
        if (!items || !callback) {
            return items;
        }
        return items.filter(item => callback(item));
    }
}
