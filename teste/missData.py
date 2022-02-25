import cx_Oracle
import config

def connect():
    connection = None

    try: 
        connection = cx_Oracle.connect(
        config.username,
        config.password,
        config.dsn,
        encoding = config.encoding)

        print(connection.version)
    except cx_Oracle.Error as error:
        print(error)

def main():
    connect()
    cur = connection.cursor()
    cur.execute('query')



"""finally:
    if connection: 
        connection.close()"""

### procurar por servico com codigo tuss faltando 
     

### pegar o codigo do servico e copiar no campo tuss