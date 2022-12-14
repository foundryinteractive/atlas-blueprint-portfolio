export class HostTemplatePlugin {
  constructor() {}

  apply(hooks) {
    hooks.addFilter('possibleTemplatesList', 'faust', (templates, data) => {
      if (data?.seedNode?.__typename === 'Host') {
        return Array.from(new Set(['host', ...templates]));
      }
      return templates;
    });
  }
}
