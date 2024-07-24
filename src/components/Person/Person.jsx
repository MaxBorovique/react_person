import React from 'react';

export const Person = ({ person }) => {
  const { name, age, married, partner } = person;

  let partnerInfo;

  if (married) {
    if (partner.gender === 'female') {
      partnerInfo = `${partner.name} is my wife`;
    } else {
      partnerInfo = `${partner.name} is my husband`;
    }
  } else {
    partnerInfo = 'I am not married';
  }

  return (
    <div className="Person">
      <div className="Person__name">My name is {name}</div>
      {age && <div className="Person__age">I am {age}</div>}
      <div className="Person__partner">{partnerInfo}</div>
    </div>
  );
};
