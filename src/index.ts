
import './pre-start'; // Must be the first import
import logger from 'jet-logger';
import server from './server';

// Constants
const serverStartMsg = 'Express server started on port: ',
        port = (process.env.PORT || 3007);

// Start server
server.listen(port, () => {
    logger.info(serverStartMsg + port);
    console.log(serverStartMsg + port);
});
