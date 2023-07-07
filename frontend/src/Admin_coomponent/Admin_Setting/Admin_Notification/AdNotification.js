import React from 'react'

export default function AdNotification() {
  return (
    <>
<table className='Notif_table table'>
                  <thead>
                    <th className='Notif_head'>Notification</th>
                    <th></th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                      Notify when teacher upload learning material</td>
                      <td><input type="checkbox"/></td>
                    </tr>
                    <tr>
                      <td>
                    Show Notification</td>
                      <td><input type="checkbox"/></td>
                    </tr>
                    <tr>
                      <td>
                     Allow Notification sound</td>
                      <td><input type="checkbox"/></td>
                    </tr>
                    <tr>
                      <td>
                     Allow Notification dot</td> 
                      <td><input type="checkbox"/></td>
                    </tr>
                  </tbody>
                </table>
    </>
  )
}

