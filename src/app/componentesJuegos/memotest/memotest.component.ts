import { extractSemanticTypeParameters } from '@angular/compiler-cli/src/ngtsc/incremental/semantic_graph';
import { Component, OnInit } from '@angular/core';
import { BanderasService } from '../services/banderas.service';
import { Card } from '../Models/card';

@Component({
  selector: 'app-memotest',
  templateUrl: './memotest.component.html',
  styleUrls: ['./memotest.component.css'],
  providers: [BanderasService],
})
export class MemotestComponent implements OnInit {

  arrayCards: Card[] = []; //Va a ser de 4
  array = [1, 2, 3, 4, 5, 6];
  constructor(private Bservice: BanderasService) { }

  ngOnInit(): void {

    //this.arrayCards = this.todos();
    this.todos();
    // console.log("Mi variable", this.arrayCards);

    // this.duplicar();


  }

  async todos() {
    var a;
    try {
      var data = await this.Bservice.todos();
      console.log("datasss",data);
      
      // await this.duplicar(data);
      
    } catch (error) {
      console.error(error);
    }
  }


  duplicar(array:Card[]) {
    //  array.push(new Card("as", "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgWFhYZGBgYGBgYGRUSGBgYGBgZGBoZGRgYGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QHxISHjQrJCs2NDQ0NDQ0NDQ0NDY0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAKgBKwMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAADBAACBQEGBwj/xAA8EAABAwIEBAMHAwIFBAMAAAABAAIRAyEEEjFBBSJRYRNxkQYUMoGhsfBCwdFS4RUjYnLxB4KywjOSov/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACQRAAICAgICAgIDAAAAAAAAAAABAhESITFBA1EiYQQTMnGB/9oADAMBAAIRAxEAPwDywqJg1+VJBio9xiFxYo0stQq8yKKoKRY0hEptKTWyrNnBxJRauoWXQqmU699lM0Vegz3hJvEqr3lWpd1OOiW9l2MVqlMQjU7q2Jp2WfYzKfTEqko+W6qaS16HQs/RBYbpmo0pUMuEIlmnh6co5blXMEQr104k9nCyVQthdovVcQ5DeykZeJdzK9F4lL4g3VaZK2rQmerwFYQvT8H4BUrjMYYzZzxr5Dp3Xi+CUi9/w1HtY1z3NoNLnkMaXZWAfqJAAnqvsmCY/I1z25CQDk/p7GOmimPjUnbJs85U9gQ7XEjyFP8AfMq1f+nluTEXjR7IBPmHWHyKb9oPaZuEGZ5IEgARJJOgA6ra4JxZmJpCpTdPYxI6yPzRVjHiisXzZ824lwCvhz/mM5dnslzT/wB0WPYwUk+AvtFRwcwhwDgRdrhII3BB1C8J7UeydhVwzSWkgOpC+Un9TZ/T1G3lplPw9xFweMcAkcQ7VN4imWEtd8Q1HTss7FOspUQFXkIb7pd9a6YomVpjWwC06acpslBa4JvDuCzkwHMIyFpUqd0pSCYp1Fg9sui+K0hYjxDlpYuskKhlaRjQmHrvGRbuI4XQB/8Aibo0+rQe3X/nVeTxMlsL3FZhnUaN3P8ASFv4lyTI8g7CqrsKtTwHdFPdndFnmitGR7oq+7LZ91d0UGCd0SzXsLRkMw10fwJWj7k7orjCO6Ic17HaMoYZEGFWk3Bu6Igwbks17C4mdSw8I9Rlkz7m5dOCepcovsq4mU3Copw4Wg3BuVXYNyeS9hlEyq2FEJB+FXojgnIZ4c5Cml2TaMenTITGSVoDhjlf/DnJ5x9h8THNOFV7JC2XcMcqjhTkZx9haPNVMJdcGEcAS1oc4Nc4BxDWnKC45iSLQCdQvSnhDk7wzhoa5weJa9j2EHTnaW37X+quPljaVg6ow/Zz21xBqspuB8M2aKIDQxw/0jlA819i4Vii9jS6xIBhfn2hRbh8RBcA4O+EkiwI0PWRp5L7NwDiAexuosOn89oXRJ1sUVaNLi3DG1mlrmNeRPK8AhzTNr+aT4LwulR5qNNtJ1w7IMoP+4DXQarYr14bMTAmdPqlqHEGPYXg/CYJWbf2UuAWI4g6mS14iRZwu0z0KH7NYx73Pn4GgNA6nKJ+spXjeKD6b4GjTE79locDw3hUKYGpEuJ3Oh+yW07srVcHi/bzhhY/xGtAa7plie2/5uvDYoSF9m9qMC7EYZ7R8THB4jcA830k/JfOHcBcUpzjF7M6R4p1MymcOwr059nj0V2cBIUPzxYaMEUijMkLfZwRy7/gjlD8sGOkZLMQUxTqp8cEcrt4O4Kc4haMquZR6FIFPu4Q5cbw140R+yPsLQnUwwVpd/U7/wCzv5T7eHvV/wDDXI/Yl2N0ehbw9vRd9xanc6heFxZMzpCowTVPdAmvECpnCVsAAwjei6MI3omWuCs5K2FCzcK3ore7N6IoVgUbAWOFb0U92HRMOcoHBPYC3uw6Ke6jomS8LgqhFsNAPdR0XPdW9Ew6qFwVAi5DBjCjoue6joj+KFBVCVyHoF7oOi6MKOiN4oUNUJ7CkCOGHRVOFHRFdWCHVr8pjoVUU20gSTdHiPab2bp4h+ZgDXkQ53XvBsPPXyT3BeAvwtMObiarjfLRhsOPKNSDkaCRJ2nyTDzkl7yQ1skwC4nsANT2WfxV9WvTa5jHsLHwxsNfmY482cEjLJaJF9u69jSionU4wgrrZzj3tFiG4d4fV/zb5aWHaJaBIJqETDd5BiLedf8Ap7xOo81vEJcyWfEZJL2SQe/w/kpd3s+95DatRjWw0mnS5ojbL8AOl76L1HCuF06TMjGwCZMnMXE/qLtypuKVLkxlt8UV4pUaCGDRxAPYE3XtsTDaY2sAJ2hebw/B2ucC68bdV6TDMDmgO5g3lBdfS0nuog220ElSQq3GtbzOMNHwj9Tz2CyXMa5znAQCSQBtJ0TPtGYewxHKR6G4/OqQp1VyfkOTlj0jNtNhPAHRT3cdFzxFYPXPTFRdtAdFb3dvRU8Rd8RTixnfBHRTwB0VTUKjaidMVlvdx0U93b0UNRV8RLFjLe7joueA3op4iH4ieLAUdVVHVSUIXCgWyiiCzapV21kMNVcqeKAbbXVjiEoFCpxQDQxCjsSlwFwBGKFbGBiF010AsQS66KQWOeLKqXoTQuOTUR2GzKNKBKjHp0Ow2Yqwcg+IuueigsYzLhelwZVXkpMmxlr5RFnslMZikFhWUmExlbfWwv59VXilGHOZo3JYCw2RuGUS94GwuTsAEzxdheXFtjBE9F2eGLcW2VGTbPGYPHBr3DLmZ+kGc1lv08a0ta5g20WLR4O4HNIPxW76E/ndP8Gw5a5wMft5hVVHRo9fgXjIXddJ6rSwwytAOs/8rKw7gGtGw+53+60c8hVBUTLZ3imAFZkaObdp79D5ryM5TB1FivdUnWC8x7Q4PK/OPhdfydv66/NR+R401kv9MOGINep4iBC4uOkPIZ8VWNRK5l0XSpBkGNZcbUlAcxXYyEhWHD1UvQ1HJ6KsIXqudDc9D8RUTkcYIUBEqheuNN0IE0Fhce1RyswpsTKgQrhi6dVYBIKBvKGFZ4uquCEOwhKoQrEWXIVAqOBys1AeCoKZSFQV5SznwmG0zuo+iChspJAWFEa2UQYSFZjIQmFHabF17FYhUfJSq2OiBiu1nVVppmnRLyALz0Tp3QY0bOHotp05b8ThM3+VlnOdcgzvPmtqu3KB2AE+Sx6XOXHQaDqQN/Ur0WlGkgitGa8CD0a0wOpv+fNcwVMDpPXTfZOVW9hfTsAN/mB9UBtPoNJN9lDRsO4WoS7rY/uB9FsUX6A/XVY1OmWta5pBgAHv2B81rYcyBsd/z5pJ7CQ9SMbz5rnE8J4tMs31ae4VKTrgJ2FqkmmjGR4Tw3AlrhBFiDsoWrS4vRc2o4uFnGQRoR/KQMLzZxxk0KkDVmBR5AVmPBUUKijjCCcReFepUvCXfhpuhxsTsZa9RzlQMhWYhKgRHNVZV3FVhXoehVjJV2hXpnKURzxCMSaoq7ZcdZSm5Gc8FDY9gGvKuKi6CFCAkhlHuKoXIheEN8JpiLEqjiV0FWcxNjONZZRzipnIC458hLkQZrrLpCWa5FD0JDLl5XA+VUuBVJQAZxXGFLeKZVzVQosOxpaPBW86xw9HwGJy1G+YC08epJsb2j0uLZnkHTfy3We2iSSdJ0GzWyY/O6dqPSj62t46eQgfWPqu2dWVF6K1aBDbCTfTvb88kFzC0bW1nfsB1TNOtYX1XAAZMW2J36/JRyXdBcKyR537CLCOu91p06YFws/DVLWM7epsSm6dX7W+ViiLQnYw1o/Nk5TSbD9U3SWseSJcGd7QD/JcYmI+XdeRzbr2/E2zSqf7HfaQvA1akBcv5MfkmSEzhyrUflNkFjSLqOPNdczjQrLU3y6UzKWYMsq4faUNAMkKkoD68CVRmItJ1RiMbHRXyJNtWUbxkKIVYnUqGbBWE7roeAoKguVTkh2izHQo6ohioCVLhTkLJBGG8q7qqC+ZXANCixNke5FDBCFWaV1kkIyBsuzzXBU3JVGslCqMvCTk2FjbXgrhEoNNoaQrVXuBsLIthYYsVHhDFe910P6IUq5FkXXHlCZV5rrr6gmU8gUg0CLrjxayo+q0hB8QgIsdl8xXWnfogMrqzXzpontCcj2j3jIDGrQfVZz2S75wgYPFGozJPO0W7x/ZY+Jxr2GO412812uakkzSB6A1MrbDMZgDbzVWNe74zI3DbDyCBwrFh7ZKI/GGTDbCbn7qdGiH8NSgkbuy/KJIH29E2ad/yyzMLjhbUmYnuenXQquP4jlcJBB0BEX7EKckkVTNw1MsBN0KiwMNXc8Fx1Gi18O6QtIS2RKOh7lcCNZBB7gr5VxVj6Vd9Mzymx6tN2n0X1Cm2BZZntFwkVm52jnaPVt5Hmn5o5xvtGLR88fiX9NFRlZ77m0LZo0L6T/ZdPDm5p07LhztaQIzmPc3W8rmJqEW87haz6LQPJDqZSOspqS7HoyqD3OFwYTFKlKdYwACyu8NGiWQ7QGnSIErvh90djpHkrZeyWQrMyqC038kvRNz2WpjaciesJTwS05gJ8lK2QlRXNcEI7SSuvpk3G6NhqczOsJpDSBgTqo2heEJ8xbUH6JjD2gnQoBHSOuy41sf3V3Phy7BJtuk7BqxdzXT0BVwxMObltrCMyi0gnuPqpDFsz6lPojvplzAd9CjPZB0tumhTAbKaLjExxRIHVSm2NloOaPUKrKM77o7onESNAzP0RDhsw0sjvbDuqNTeR89k73QYmfTwoGqK/Dtb80xltfquOZAuVNugxEX4ME2sj0aDQEQuPTZdpiWkoUmCSL8KoZKgPWR5yELimHaSZtv805hKbpa/ob9huleJ0TJ6z9l2eF/Br7KiqYLgzAH5P6remi0W0uZwOgj7rz2GxRDgR8TSCPMH+wW5WxrSPEbobObuJN/S6q9UarkZpYaCD3Eft6FC9oaWdgc2z2EOjqLZvpKM+uMogz+SsPGcRLn5d3ODR9SfpPqhJIq7NTDzAMxI0BXp8O6AJ6BYGBpnToFtYQExKuOmS3aHWGUYvAQm2Hkl6T5cTstsqM6su7CU3GcsHtb6LznGqfh1SYs4Aj0g/X7r0zXy6yV43ghUZIHM248jqPzos/LDKLa5RLR43EOsTsUHDsGT7J+tQLmGBKWZSIGm2i8+1dCaBU6k2K6x4aSYldZhZcDMncbfJHxDG5uXYXCEwp0AY2Zib/dE8Pqb7q1NwY5rhobR2P7j9leowAnRKrBIqagGonsu0agDj0iVZlOBzWsCI77QuPZAz2IgDujIYN9QXgQQfkeiBTxGxsSPujueS0kjljUD0v1CWD4EuaHZiGgmemtlKluhLkY8PK24mT5qz2tgkWjbZc8IwHAwSdDtFro7GDK8ySYmBom5XopoXbRBdJMnVWZTN5MXkR03hEwwYeunnCYbT5CSdBr5ocvQJIECOYbWhL+ORIgxIgpii2SdPM/RcNTISDpI+Sm7Cye8B0Dr+Qi1HWAb8whPqA3MT1A66LhZEEuny2VXWkaKargFWeRB208ijU6oaAYNyuBsh29xp1ixhCzSWiDH8qbojuwrKgc+CLG091eqwtMdEhRHMZkZSdbeYUr1CLkkzp+yaprYXoZbiG/ORaJVK+MAHMBckfws/GUXuYCBDjJF9h/P7IVGi57Sx36C0g6mTa46K6jWhU2aeHxQJMHZWp1rjpvHVZzKGQ8wgknmb5x9wo5r2aGR9Z00U4oVGs2uZgOAm0J2qySCYki8ddP2n5rybcU91UMmBMuB1LY19V6nht2wdnWPUHT+PkujwqpU+x1WzD4rw9zH527X/lKMqFzczSRJII76QV7XGUQWfJeQOVjT3e4kdP+Ik9ltKNM1TtD2AIdBnXUd/wFI0KGfEj/AEl5+mX90xhuTL9fNaWAw4NQuA1H3SW6Q+FZs4OnDSey0sIyBJKFQZyphzg0C8XAHmVtVbIsmJdDUjSrA2BBA36n+AluNcQFNjnOIygeWZxs1gjr9klwDEl9PM6A6XAxpmBvASk7Y0tHo6Tk1nWfhnTdHd8QvpqFaetEtHksZiw1zr2BcIb5mLfJK4bEFzSIOu9ieyNxbDFlYwJvby1lVxIbAe7a3Lu4WgDeV5Mkrd9EtWWDQGhzmOBHppMH1VKYEG4gzfyFh6wiUab8pGocQWg6Rt+ytTpkZhlAgkg2Isb29QpUmwKVaZdAafhb8I10mR1V20wQCTqBseilJ45mkC0NJBgaAi/lCIykY+P/APTf5RNPoGAe4BrASTEgu1i9rb9PkhtxLXSSIMdLDYuI6ImMptcSQQG2EgiARmcAAexJQ6FVrPjuLy6CbHSY+fqtG0hNbBYvEOyAZjBgkbHrHZQNJDbQ2QR32/hVr4M1A2XEBtwWWsQLi3l6rtNkNDXPDi3TLbNmjUaA/wAKHrYYj76YfN9TFtrwR9NUKs/IMwt+l3naT80vSqMFpi7iZ7wBHXVNvaX0yG/qmQ4Xgf6fMTqlewEqjHReMs3I1y6g/stLD1WlljO8OH77pBuGdkyAA2OsyMt7TYzERM3V8DTIZmP6XPYQJuBHUdSm3VsE9jT3hziD6d4kgKuMpuaDrEw3S94Qsl2xYuBM99DI3tdVfWJzXMZphwBNzOYHYSVLdu0VSCeI3I0QcxEG1hCo7mB/2i0xEalUoVC95Bm8G0aaE/8Aifmh0ngiWnsO5m9ge6abvZPA3hnNzwJF4Jd8Ok76jS6tXGpBsPoT+y4KvKC4A6tnYz08oQMRbfKZgEnvt9EPeh9FqlFzrtPNE3OveOqBVw+aGk3LTB0v5J0V2cs/E2wiRuRcebXA7IWKqwAYuHNJk94MehTWh1qytbD5YAAdka0SZ0tI7q1TWQYJgRfyBPaUJ9UOGeSIIyh27dcxj8gdUM1CzK87O1kXG4jaObXqE0mS5BMQzZ1y63zN/wB5TeHY15azTNs64B7bgeXVZruLDND2OPM4BzcogWAOsCzTv8gmcLxZjX8wyi+UUz8Mg6dTqdJufJXGNtXwFmuPZtucQ8couCOv6WnUdT8kd2BFJhLX5m5tAIy7Lz9b2gLGuAcHOzlwdUhp5S1o0EHlLdxqpwriT6td7HCM7GvhrCwCHZYIvffXcldsXC7S2I9Mx4c268D7QsLQ8Czg4kdxM/Y/Ve+pMGmp6fyF4L2ml9apPwMYXktdB5G/AehP8qpukrNEJ4TicsaCDMfxcr1nBMRIg2IsfQEfQheCHDDVZnzZS3MWwQSbtDRYx110EWXsvZKkRQDnmLvcc1iA3lM9PhWaavQ1LVM9vhXZh8kCi8PDHuuQZyi4zOETpMhpd6q2CqNEgGcuvQdp0nT1C8jxbjRpyKZeHBzCAA3Kc4AF3AxEEE7SOyuc9rYkJ+17BUxDWtzHJm5cpa3OQM2X+owQJ2keS3OAcOcxr2ucHAVHEPAgEZiZA8jC8RgaVStiGVKz/Ea452Ne9z3ue0S2OUZGCT2sIHMSvTcL4jVbDX3LjytB5iGgySBYDNECAIndQ/IkyketpPAP7BLUcXme8gEtzG4uCQAIkTa34Ncb3rM97MzQYcIL8rt9PpcWF7hXpY3IX5Wi+XK2Y5Q0AaC0QfWFP73dVSFQzxPEsfBEz8BAsQIEadDN+yQYxshvLMAmbktIMwfOEhxWs+QcgzHM7KHQJzXA1tMGULxyzLI5mB0ATyg6X7c3quLyRyll7I9Gsx5zWLidwJAIaLEiNO3ZUxLyDmE8oOaIvEyTG1ggUsYAYc4iTlu0/EbHTXQo2MJLSyAeWCDYREEtOxvbrmHzhJj+gT6pa8h7TEODTMtOQF1h0t6oNSpJlp5TER0jyRazi+CAQGmQ/lPLsHCOs3HzRaeGZHMWzfqLTb6QtKXbGlYkWHKSTAEHQkFxBkzebl2kEWRWVRMtuZs3ctteTsZNpUUREhcBWVoJa0WdJDXcp6G4Fr2066pfw2y2DZp+IcpJuNALwT9F1RXSoVhS9jmyHwLwMsbgGd9ZvbVdGIhxkEBuVokWh3feLqKLJ9gyF4bmJ5g4ZYvcD4ubQfflRHGWPvaQ5sC8EZS0knWR11UUR6BC/vEBpzQDMPJmbR/7d9N1SlVfmIcJLdR21Bj5+i6onirKO0a36pIicxBiYuBlHl3+6VxLKr2hoytMucHDRwIzZmmN7T/Kii0iNA6WNytAOZ2UvmHZQQQMogg9TfSx62er0M7xLQRA5HBp5rEFpnWbwoolL+QvY5jabBALIloF5kNJBDidfiExvHnKGOfJyAyX5LN1bENsenKfRRRIplOJPc2HM5gDlIBIIkwCNd4+nyNgTSfmaWwSCC0mC4CNG6A3nQnQixhRRV0ZvkXqYIPflYQWjIwsBdytAcbk3DZGvcrNxLHF5DTykyHgaNZzSGt3DZPWSOoUUVQbK6GTTDmkhueCM7SALOFnMBs4/DIMak223OEgMEOcxrnFjWkQ10WcZAgayRAHW0woonk09eyVwaGHrw97YAPJYbw0zHXrPdeOr0g6vXc8uy1GhwbcACWsMR1c8eh81FFpOToqIvhsGwB2W2ZxY28EHxAGkGL7CdRB1mR6jDPaxhaHWjLZoJBIGd1vOZ7k33iiyjJ2NjfvWGZTPhQ67QfDHMQ24Lg7W8C+uZYVSCXgiA7lDnRzieVtjzAggX0Nt5UUVeV8f0CKsqMAkaODoNxluC8zPYn/ALh5juI4gGMDA0NJabttPUkEybQLyZ7FRRTwihXD8R5Gb3+ItaSCLFoP9N46mNk25+c5ozPLfJpyEAhxAOxBB0lx01UUTpChvk7iaFw57j8eZjYaSQYaWZ80Zp5d5aGq2KeXOquylvMTmIizXuiLRF7+YUUWfY8VbEaGIdUcHZYyOcHCQSQAX2jW4Bt9itTAUAZp5y5wDgG2Btyt5plzZBvEw47REUVy0wZmMxTszpZkcHABhc7lmLbg36Rb0TH+Izsz1b+4UUQ4ok//2Q==", 100, 876));
    
    array.forEach(element => {
      console.log("element",element);
    });

    // console.log("dupli", array);
  }



  // async duplicar(array: Card[]) {
   

  //   this.array.forEach(res => {
  //     let orden: number = Math.floor(Math.random() * 99999);
  //     var card = new Card(res., res.imagen, res.id, orden);
  //     //array.unshift(card);
  //     array.push(card);

      
  //   });
  //   console.log("aux", array);
  //   return this.arrayCards;
  // }

  // desordenar() {
  //   // this.arrayCards.sort(function () { return Math.random() - 0.5 });
  //   // this.arrayCards.sort(() => Math.random()-0.5);
  //   // console.log("desordenado", this.arrayCards);
  //   // this.arrayCards = this.shuffle(this.arrayCards);
  //   // console.log("sa",this.arrayCards);
  // }


  // shuffle(array:Card[]) {
  //   var currentIndex = array.length, temporaryValue, randomIndex;

  //   // Mientras queden elementos a mezclar...
  //   while (0 !== currentIndex) {

  //     // Seleccionar un elemento sin mezclar...
  //     randomIndex = Math.floor(Math.random() * currentIndex);
  //     currentIndex -= 1;

  //     // E intercambiarlo con el elemento actual
  //     temporaryValue = array[currentIndex];
  //     array[currentIndex] = array[randomIndex];
  //     array[randomIndex] = temporaryValue;
  //   }

  //   return array;
  // }





}
