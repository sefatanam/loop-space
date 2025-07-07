
import { Component, ViewEncapsulation } from '@angular/core';
import { httpResource } from "@angular/common/http";
import * as z from "zod/v4";

const Comment = z.object({
    postId:z.number(),
    id:z.number(),
    name:z.string(),
    email:z.string().email(),
    body:z.string().nonempty()
})
const Comments = z.array(Comment);

@Component({
    selector: 'app-basic',
    templateUrl:'./basic.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class BasicComponent {
    comments = httpResource(() => 'https://jsonplaceholder.typicode.com/comments', {
        parse: Comments.parse
    })
}
