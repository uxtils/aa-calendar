import test from 'tape';

import Calendar from '../';

test('Calendar', (t) => {
  t.test('does not throw when instantiated', (st) => {
    st.doesNotThrow(
      () => new Calendar(),
      'without parameters'
    );

    st.end();
  });

  t.test('can have many instances', (st) => {
    const c1 = new Calendar();
    const c2 = new Calendar();

    st.notEqual(c1, c2);

    st.end();
  });
});
