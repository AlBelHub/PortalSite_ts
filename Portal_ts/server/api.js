import express from 'express';
import cors from 'cors';
import { nanoid } from "nanoid";

const corsOpt = { origin: "http://localhost:5173" }

function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

const allowCrossDomain = (req, res, next) => {
  
};

const app = express();
app.use(cors());
app.use( (req, res, next) => {
  res.header(`Access-Control-Allow-Origin`, `*`);
  res.header(`Access-Control-Allow-Methods`, `GET,PUT,POST,DELETE`);
  res.header(`Access-Control-Allow-Headers`, `Content-Type`);
  next();
});
const port = 3000;

export const Announcements = [
  {
    id: "1",
    header: "header1",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, doloribus fuga! Dolores rem sequi tempore ullam vitae at molestiae maiores atque nemo sunt ea ratione recusandae saepe autem pariatur ex suscipit asperiores sit error, in laudantium distinctio. Fugit dolor dolore necessitatibus nisi harum reprehenderit officia ea, distinctio quos excepturi illum!",
    timestamp: new Date(2023, 2, 3, 17, 53),
  },
  {
    id: "2",
    header: "header2",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, doloribus fuga! Dolores rem sequi tempore ullam vitae at molestiae maiores atque nemo sunt ea ratione recusandae saepe autem pariatur ex suscipit asperiores sit error, in laudantium distinctio. Fugit dolor dolore necessitatibus nisi harum reprehenderit officia ea, distinctio quos excepturi illum!",
    timestamp: new Date(2023, 4, 6, 17, 53),
  },
  {
    id: "3",
    header: "header3",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, doloribus fuga! Dolores rem sequi tempore ullam vitae at molestiae maiores atque nemo sunt ea ratione recusandae saepe autem pariatur ex suscipit asperiores sit error, in laudantium distinctio. Fugit dolor dolore necessitatibus nisi harum reprehenderit officia ea, distinctio quos excepturi illum!",
    timestamp: new Date(2023, 3, 20, 18, 53),
  },
  {
    id: "4",
    header: "header4",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, doloribus fuga! Dolores rem sequi tempore ullam vitae at molestiae maiores atque nemo sunt ea ratione recusandae saepe autem pariatur ex suscipit asperiores sit error, in laudantium distinctio. Fugit dolor dolore necessitatibus nisi harum reprehenderit officia ea, distinctio quos excepturi illum!",
    timestamp: new Date(2022, 6, 4, 13, 22),
  },
  {
    id: "5",
    header: "header5",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, doloribus fuga! Dolores rem sequi tempore ullam vitae at molestiae maiores atque nemo sunt ea ratione recusandae saepe autem pariatur ex suscipit asperiores sit error, in laudantium distinctio. Fugit dolor dolore necessitatibus nisi harum reprehenderit officia ea, distinctio quos excepturi illum!",
    timestamp: new Date(2023, 11, 9, 10, 13),
  },
  {
    id: "6",
    header: "header6",
    content:
      "Lorem ipsum d2olor sit amet consectetur adipisicing elit. A, doloribus fuga! Dolores rem sequi tempore ullam vitae at molestiae maiores atque nemo sunt ea ratione recusandae saepe autem pariatur ex suscipit asperiores sit error, in laudantium distinctio. Fugit dolor dolore necessitatibus nisi harum reprehenderit officia ea, distinctio quos excepturi illum!",
    timestamp: new Date(2023, 12, 30, 9, 46),
  },
  {
    id: "7",
    header: "Заместитель Губернатора Новосибирской области Мануйлова И.В. выражает благодарность старшему научному сотруднику Центра развития профессиональных кадров Савиной Н.М. за активное участие в подготовке и проведении X Международного форума технологического развития Технопром-2023",
    content: "",
    timestamp: new Date(2023, 7, 6, 5, 15),
  },
];

const orderEnum = 
{
    created: "created", 
    closed: "closed",
    inProgress: "progress",
    completed: "completed",
    deadline: "deadline",
    awaitingApprove: "awaiting"
}
export const Order = 
[
    {
        id: nanoid(8),
        status: orderEnum.completed,
        author: "Имя Пользователя",
        department: "Отдел пользователя",
        cabinet: "301",
        timestamp: randomDate(new Date(2020, 0, 1), new Date()).toLocaleDateString(),
        description: "Сломался принтер!",
    },
    {
        id: nanoid(8),
        status: orderEnum.deadline,
        author: "Имя Пользователя",
        department: "Отдел пользователя",
        cabinet: "301",
        timestamp: randomDate(new Date(2020, 0, 1), new Date()).toLocaleDateString(),
        description: "Сломался принтер!",
    },
    {
        id: nanoid(8),
        status: orderEnum.inProgress,
        author: "Имя Пользователя",
        department: "Отдел пользователя",
        cabinet: "301",
        timestamp: randomDate(new Date(2020, 0, 1), new Date()).toLocaleDateString(),
        description: "Сломался принтер!",
    },
    {
        id: nanoid(8),
        status: orderEnum.completed,
        author: "Имя Пользователя",
        department: "Отдел пользователя",
        cabinet: "301",
        timestamp: randomDate(new Date(2020, 0, 1), new Date()).toLocaleDateString(),
        description: "Сломался принтер!",
    },
    {
        id: nanoid(8),
        status: orderEnum.closed,
        author: "Имя Пользователя",
        department: "Отдел пользователя",
        cabinet: "214",
        timestamp: randomDate(new Date(2020, 0, 1), new Date()).toLocaleDateString(),
        description: "Сломался принтер!",
    },
    {
      id: nanoid(8),
      status: orderEnum.completed,
      author: "Имя Пользователя",
      department: "Отдел пользователя",
      cabinet: "301",
      timestamp: randomDate(new Date(2020, 0, 1), new Date()).toLocaleDateString(),
      description: "Сломался принтер!",
  },
  {
      id: nanoid(8),
      status: orderEnum.deadline,
      author: "Имя Пользователя",
      department: "Отдел пользователя",
      cabinet: "301",
      timestamp: randomDate(new Date(2020, 0, 1), new Date()).toLocaleDateString(),
      description: "Сломался принтер!",
  },
  {
      id: nanoid(8),
      status: orderEnum.inProgress,
      author: "Имя Пользователя",
      department: "Отдел пользователя",
      cabinet: "301",
      timestamp: randomDate(new Date(2020, 0, 1), new Date()).toLocaleDateString(),
      description: "Сломался принтер!",
  },
  {
      id: nanoid(8),
      status: orderEnum.completed,
      author: "Имя Пользователя",
      department: "Отдел пользователя",
      cabinet: "301",
      timestamp: randomDate(new Date(2020, 0, 1), new Date()).toLocaleDateString(),
      description: "Сломался принтер!",
  },
  {
      id: nanoid(8),
      status: orderEnum.closed,
      author: "Имя Пользователя",
      department: "Отдел пользователя",
      cabinet: "214",
      timestamp: randomDate(new Date(2020, 0, 1), new Date()).toLocaleDateString(),
      description: "Сломался принтер!",
  },
  {
    id: nanoid(8),
    status: orderEnum.completed,
    author: "Имя Пользователя",
    department: "Отдел пользователя",
    cabinet: "301",
    timestamp: randomDate(new Date(2020, 0, 1), new Date()).toLocaleDateString(),
    description: "Сломался принтер!",
},
{
    id: nanoid(8),
    status: orderEnum.deadline,
    author: "Имя Пользователя",
    department: "Отдел пользователя",
    cabinet: "301",
    timestamp: randomDate(new Date(2020, 0, 1), new Date()).toLocaleDateString(),
    description: "Сломался принтер!",
},
{
    id: nanoid(8),
    status: orderEnum.inProgress,
    author: "Имя Пользователя",
    department: "Отдел пользователя",
    cabinet: "301",
    timestamp: randomDate(new Date(2020, 0, 1), new Date()).toLocaleDateString(),
    description: "Сломался принтер!",
},
{
    id: nanoid(8),
    status: orderEnum.completed,
    author: "Имя Пользователя",
    department: "Отдел пользователя",
    cabinet: "301",
    timestamp: randomDate(new Date(2020, 0, 1), new Date()).toLocaleDateString(),
    description: "Сломался принтер!",
},
{
    id: nanoid(8),
    status: orderEnum.closed,
    author: "Имя Пользователя",
    department: "Отдел пользователя",
    cabinet: "214",
    timestamp: randomDate(new Date(2020, 0, 1), new Date()).toLocaleDateString(),
    description: "Сломался принтер!",
},
{
  id: nanoid(8),
  status: orderEnum.closed,
  author: "Имя Пользователя",
  department: "Отдел пользователя",
  cabinet: "214",
  timestamp: randomDate(new Date(2020, 0, 1), new Date()).toLocaleDateString(),
  description: "Сломался принтер!",
},
{
  id: nanoid(8),
  status: orderEnum.closed,
  author: "Имя Пользователя",
  department: "Отдел пользователя",
  cabinet: "214",
  timestamp: randomDate(new Date(2020, 0, 1), new Date()).toLocaleDateString(),
  description: "Сломался принтер!",
},
{
  id: nanoid(8),
  status: orderEnum.awaitingApprove,
  author: "Имя Пользователя",
  department: "Отдел пользователя",
  cabinet: "214",
  timestamp: randomDate(new Date(2020, 0, 1), new Date()).toLocaleDateString(),
  description: "Сломался принтер!",
},
{
  id: nanoid(8),
  status: orderEnum.awaitingApprove,
  author: "Имя Пользователя",
  department: "Отдел пользователя",
  cabinet: "214",
  timestamp: randomDate(new Date(2020, 0, 1), new Date()).toLocaleDateString(),
  description: "Сломался принтер!",
},
{
  id: nanoid(8),
  status: orderEnum.awaitingApprove,
  author: "Имя Пользователя",
  department: "Отдел пользователя",
  cabinet: "214",
  timestamp: randomDate(new Date(2020, 0, 1), new Date()).toLocaleDateString(),
  description: "Сломался принтер!",
},
{
  id: nanoid(8),
  status: orderEnum.awaitingApprove,
  author: "Имя Пользователя",
  department: "Отдел пользователя",
  cabinet: "214",
  timestamp: randomDate(new Date(2020, 0, 1), new Date()).toLocaleDateString(),
  description: "Сломался принтер!",
},


]



app.get('/', (req, res) => {
  res.send(data);
})

app.get('/AllAnnouncement', (req, res) => {
  res.send(Announcements);
})

app.get('/AllOrders', (req, res) => {
  res.send(Order);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})









