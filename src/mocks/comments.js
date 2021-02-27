import {getRandomNumber} from '../helpers/common.js';
import {authors, comments, emotions} from './const.js';

const createComment = (id) => {
  return {
    id,
    author: authors[getRandomNumber(0, authors.length - 1)],
    comment: comments[getRandomNumber(0, comments.length - 1)],
    date: `2019-05-11T16:12:32.554Z`,
    emotion: emotions[getRandomNumber(0, emotions.length - 1)]
  };
};

const createComments = (count) => {
  const commentsList = [];

  for (let i = 0; i < count; i++) {
    commentsList.push(createComment(i));
  }

  return commentsList;
};

export {createComments};
