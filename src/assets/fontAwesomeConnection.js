// font awesome import
/*
 * import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 * <FontAwesomeIcon icon="home" />
 * <FontAwesomeIcon icon={['fab', 'apple']} />
 * */

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
   faSeedling,
   faUserFriends,
   faUtensils,
   faTrashAlt,
   faCartPlus,
   faUser
} from '@fortawesome/free-solid-svg-icons';

library.add(
   fab,
   faUserFriends,
   faUtensils,
   faTrashAlt,
   faCartPlus,
   faSeedling,
   faUser
);
