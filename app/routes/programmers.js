import Route from '@ember/routing/route';

export default class ProgrammersRoute extends Route {
	model()
	{
		return ['Fred Bloggs', 'Dave Dimwit', 'Billy Bunter'];
	}
}

