/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under both the MIT license found in the
 * LICENSE-MIT file in the root directory of this source tree and the Apache
 * License, Version 2.0 found in the LICENSE-APACHE file in the root directory
 * of this source tree.
 */


import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'LSP Included',
    icon: '🔋',
    description: (
      <>
        ELP includes a fully fledged LSP language server for the
        Erlang programming language,
        providing advanced features such as go-to-definition,
        find references, call hierarchy and more for your IDE
        of choice.
      </>
    ),
  },
  {
    title: 'A platform for tool developers',
    icon: '🛠️',
    description: (
      <>
        ELP is easily extensible and provides a convenient API
        to implement linters and refactoring tools for Erlang.
      </>
    ),
  },
  {
    title: 'Powered by Rust',
    icon: '🦀',
    description: (
      <>
        ELP leverages the memory safety, the strong type system and the
        battle-tested libraries of Rust to provide a reliable and efficient
        solution to Erlang developers.
      </>
    ),
  },
];

function Feature({icon, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center" style={{fontSize: '400%'}}>
        {icon}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
