import { ProjectorMixin } from '@dojo/framework/widget-core/mixins/Projector';
import HelloWorld from './widgets/HelloWorld';
import Evented from '@dojo/framework/core/Evented';
import request from '@dojo/framework/core/request';
import xhr from '@dojo/framework/core/request/providers/xhr';

const coreEvented = new Evented();
coreEvented.destroy();
request.setDefaultProvider(xhr);

// Create a projector to convert the virtual DOM produced by the application into the rendered page.
// For more information on starting up a Dojo 2 application, take a look at
// https://dojo.io/tutorials/002_creating_an_application/
const Projector = ProjectorMixin(HelloWorld);
const projector = new Projector();

// By default, append() will attach the rendered content to document.body.  To insert this application
// into existing HTML content, pass the desired root node to append().
projector.append();
