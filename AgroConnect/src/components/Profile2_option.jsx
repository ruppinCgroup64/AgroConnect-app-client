import React from 'react'

export default function Profile2_option(props) {
  let oNav = props.oNav;
  let oText = props.oText;
  let oIcon = props.oIcon;

  return (
    <TouchableOpacity onPress={() => navigation.navigate({oNav})}>
      <View style={{ flexDirection: 'row' }}>
        <Icons name='person-outline' size={25} color={theme.txt} />
        <Text style={[style.s18, { color: theme.txt, marginLeft: 10, flex: 1 }]}>{oText}</Text>
        <Icons name={oIcon} size={20} color={theme.txt}></Icons>
      </View>
    </TouchableOpacity>
  )//return
}//export
