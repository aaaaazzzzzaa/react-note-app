import { v4 } from 'uuid';

const notes = [
  {
    title: '테스트 노트 1',
    content: '테스트 노트 1의 본문',
    tags: [{ tag: 'coding', id: v4() }],
    color: '#cce0ff',
    priority: 'high',
    isPinned: true,
    isRead: false,
    date: '12/6/24 10.55 AM',
    createdTime: new Date().getTime(),
    editedTime: null,
    id: v4(),
  },
  {
    title: '테스트 노트 2',
    content: '테스트 노트 2의 본문',
    tags: [{ tag: 'exercise', id: v4() }],
    color: '#ffcccc',
    priority: 'high',
    isPinned: true,
    isRead: false,
    date: '12/6/24 11.00 AM',
    createdTime: new Date().getTime(),
    editedTime: null,
    id: v4(),
  },
];

export default notes;
