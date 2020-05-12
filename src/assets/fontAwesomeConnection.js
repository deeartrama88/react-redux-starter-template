
/*
 * import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 * <FontAwesomeIcon icon="home" />
 * <FontAwesomeIcon icon={['fab', 'apple']} />
 * */

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
   faHeart,
   faCommentAlt,
   faCheckCircle,
} from '@fortawesome/free-regular-svg-icons';
import {
   faSeedling,
   faUserFriends,
   faUtensils,
   faTrashAlt,
   faCartPlus,
   faUser,
   faTimes,
   faShoppingCart,
   faDatabase,
   faBars,
   faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

library.add(
   fab,
   faUserFriends,
   faUtensils,
   faTrashAlt,
   faCartPlus,
   faSeedling,
   faUser,
   faTimes,
   faShoppingCart,
   faHeart,
   faCommentAlt,
   faDatabase,
   faBars,
   faEnvelope,
   faCheckCircle,
);
