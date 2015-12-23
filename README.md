# ember-active-scroll-list
Ember Addon helps to keep active element visible in overflowed list. 

###[Demo](http://ember-active-scroll-list.surge.sh)

## Usage

```hbs
{{#active-scroll-list tolerance=0 scrollTimeout=2000 activeIndex=activeIndex class='list'}}
  {{#each items as |item index|}}
    <div class="item {{if (eq index activeIndex) 'active'}}">{{item}}</div>
  {{/each}}
{{/active-scroll-list}}
```
can be also be extended as mixin
```javascript 
import Ember from 'ember';
import ActiveScrollListMixin from 'ember-active-scroll-list';

export default Ember.Component.extend(ActiveScrollListMixin, {
  ...
});
```

##Options
  * activeIndex
  Index of element which needs to be visible on the list

  * tolerance
    How much `top` and `bottom` edges should be offset when determining overflow

  * scrollTimeout
    Timeout for when autoscroll is activated

## Installation
You can install either with `ember install`:

```shell
  ember install ember-active-scroll-list
```
