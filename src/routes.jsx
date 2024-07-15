import { createBrowserRouter } from "react-router-dom"; //após instalação react router dom, tem que importar pra cá//
import Home from './pages/Home'
import UsersList from './pages/UsersList';

const router = createBrowserRouter([ //sitema de roteamento e aqui que as rotas são criadas//
    {
        path: '/',
        element: <Home /> //página Home, importando do arquivo Home//
    },
    {
        path: '/users-list', //página UsersList, importando do arquivo UsersList//
        element: <UsersList />
    }
]);

export default router;
