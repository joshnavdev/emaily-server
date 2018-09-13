const keys = require('../../config/keys');

module.exports = survey => {
  return `
    <!DOCTYPE html>
    <html>

    <head>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <title>Page Title</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>

    <body>
      <table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
        <tr>
          <td bgcolor="#ffffff" align="center" style="padding: 40px 0 30px 0;">
            <img src="https://ibb.co/izwr9n" alt="Creating Email Magic" width="400" style="display: block;" />
          </td>
        </tr>
        <tr>
          <td bgcolor="#ffffff" style="padding: 40px 30px;">
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
              <tr>
                <td style="color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;">
                  <b>Lorem ipsum dolor sit amet!</b>
                </td>
              </tr>
              <tr>
                <td style="padding: 20px 0 30px 0; color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;">
                  ${survey.body}
                </td>
              </tr>
              <tr>
                <td align="center">
                  <table border="0" cellpadding="0" cellspacing="0" width="75%">
                    <tr>
                      <td width="260" valign="top">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                          <tr>
                            <td align="center">
                              <a href="#">
                                <button style="cursor: pointer; width: 100%; height: 50px; background: #FF7F50; border-color: #FF7F50; border-radius: 5px">Yes</button>
                              </a>
                            </td>
                          </tr>
                        </table>
                      </td>
                      <td style="font-size: 0; line-height: 0;" width="50">
                        &nbsp;
                      </td>
                      <td width="260" valign="top" align="center">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                          <tr>
                            <td align="center">
                              <a href="#">
                                <button style="cursor: pointer; width: 100%; height: 50px; background: #FF7F50; border-color: #FF7F50; border-radius: 5px">No</button>
                              </a>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td bgcolor="#e67b52" style="padding: 30px; border-radius: 10px">
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
              <tr>
                <td width="75%"  style="color: #153643; font-family: Arial, sans-serif; font-size: 14px;">
                  &reg; Someone, somewhere 2013
                  <br/>
                  <a href="#" style="color: #153643;">
                    <font color="#153643">Unsubscribe</font>
                  </a>
                  to this newsletter instantly
                </td>
                <td align="right">
                  <table border="0" cellpadding="0" cellspacing="0">
                    <tr>
                      <td>
                        <a href="http://www.twitter.com/">
                          <img src="https://ibb.co/bJKpvS" alt="Twitter" width="38" height="38" style="display: block;" border="0" />
                        </a>
                      </td>
                      <td style="font-size: 0; line-height: 0;" width="20">&nbsp;</td>
                      <td>
                        <a href="http://www.twitter.com/">
                          <img src="https://ibb.co/e2jNFS" alt="Facebook" width="38" height="38" style="display: block;" border="0" />
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>

    </html>
  `
}
