export default function(){
  this.transition(
    this.fromRoute('index'),
    this.toRoute('signup'),
    this.use('toLeft', { duration: 500 }),
    this.reverse('toRight')
  );
  /*
  this.transition(
    this.fromRoute('index'),
    this.toRoute('co-op'),
    this.use('toLeft', { duration: 500 }),
    this.reverse('toRight')
  );
  this.transition(
    this.fromRoute('index'),
    this.toRoute('designers'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  this.transition(
    this.fromRoute('index'),
    this.toRoute('manufacturing'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  this.transition(
    this.fromRoute('co-op'),
    this.toRoute('designers'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  this.transition(
    this.fromRoute('co-op'),
    this.toRoute('manufacturing'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  this.transition(
    this.fromRoute('designers'),
    this.toRoute('manufacturing'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  */
}
