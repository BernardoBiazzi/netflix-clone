import Banner from "../../components/banner/banner";
import Carousel from "../../components/carousel/carousel";

const banners = [
    {
        logo: 'https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABSO1mI0bA-Pw6sTZJDDj_fbiooJJwLtzcTgp5sq5UzuPs5BdbyE86-eqCJbq_x6HQe7h5EF8C1Zf151odsu7t9TqBGt6T6Z7F3IHnrEMQ2El.png?r=d03',
        background: 'https://images3.alphacoders.com/605/605918.jpg',
        title: 'Top 1 em filmes hoje',
        description: 'Durante a Segunda Guerra Mundial, um matemático lidera uma equipe de analistas de criptografia para decifrar o famoso código alemão Enigma.',
    },
    {
        logo: 'https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABa4KQwVIJVdSqnq3qHzYXfqistVsfo2To9K9aaxZJo5kg0UTssNqlJSxukByQ2Uhhudg75rAHyi-BpEENgyfzlFHjo4mrGnfk0RakuhFSyLY_8KRtJQczp3Vdqxi-pqmNcKLBHLqKVbcihqQ9BiwPlnTzYxVNYa51qdEij9j5iE3Z16hFg4vew.png?r=52e',
        background: 'https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABQzidigpk2obHBTzWBkuww1AYB1kk2RDa8BtIPlDGeY5dgulGUznyWu31pcYpXQwdFF8hSxM7vfKQZ4JWI4mTLiqhBBQbrO7neVs.jpg?r=e2e',
        title: 'Top 2 em filmes hoje',
        description: 'Convocado para a linha de frente da Primeira Guerra Mundial, o adolescente Paul encara a dura realidade da vida nas trincheiras.',
    }
];

const carousels = [
    { 
        id: 1, 
        title: 'Amor e tecnologia',
        items: [
            { url: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdfBvdZekQbkVboCOn9LNh5yQFdtc93NN4msRkK-Qc74utU7prcFZBIowrlydcbdLWkDtRSMjFJMZLETYwOTXnmtPEWIGQfGjFI.webp' },
            { url: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABVku_1JPpTIDv_t32idYD9RagVzg3DKuQ3pcJ6ghIVB0mW9-rDmvcJxXEbo3bAaHLU4jTL-G-X2CtYoV-umSvxmlYvWyLNzHezcWPc6umIdD2g5zx0RW8x9ZbK9_0443hFVY.jpg' },
            { url: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQzjiwg0WFTPbUaTaayWKNDN975wrR0RuRT5tvXoxgwT1TfqogtuzJ0TCYEaOqjw3t14vOMKT5X2lSlDDxMlE_UYeSFcxU4FDYJsn5KwbNnvRgTJqGFOh5EgKRI9Y0ynaJzr.jpg' },
            { url: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZJ_7CPwddfqeyjXjyyCCk_UqWvDv04NbS4g5GDfBOYlynmWzTgSHuRWCbB63Y3tLBILZ5mzWD7DGNSTGhJfBpkq4-t_bLeZzTHqAd5ROz6SNWm7hLGFlPTxaJKgwWTB7oWS.jpg' },
            { url: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfKJMQAI4JgCEusqShsD45yeBY7tQvvPZ0OL3iuGwO0zarO8HNK1NdTFe2mYG4jdKEEgbprwUAMXRi9C9YAIfeImOQejK79inM4tMrxTtYy1MerSBCtIKPc6nqMS3C9qDxTp.jpg' },
            { url: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABVY7iL-rGaXklEhGH9Kmb9tvwM52p6fUqMI6CKOkHPprS59qD8CDkheOplb3chKvbMjA7Ym4j4OGhYfYyNxq07qH_StqRiBUVYgXyxTxDfFZc1Zw9TngFJ99wfMzIY_Zdsc0.jpg' },
            { url: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABf1MyEn7Gf4aIe-nPR0RswdQ-5vmeGICPomMSWaiK27Nuab8rVGKf7N7fOrDye4BDShktmCHt-KXL-ccM2bQyfiRTnobJBq3VqPGrnkLc-hJDmmf8Gk1mUrlGqhe9ldzn3v3.jpg' },
            { url: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeK-1NbSExtowmXGvkdLxFiBEqDy9VZyDhDZYZ63-LO7bgdbTCoEU38sxREFL7ZrYHCERFOlbsY1jfDPqLs1mlEBcnyayrM3dff3o9BXFaVX6J5L805ZKYpLqt8X9Hl87oqy.jpg' },
            { url: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXmyB-9IGoD2Nqjf_fupk6LjGopB2ffJSGdjcF9zzSYFvIZTO4HJBAcHNcajel3Uk8GA4DBd4vRgXvBjt7s6IEh5jzZ7JzjcdPT5NQLumwtu3QZMFlC_benDKLHazLyX387g.jpg' },
            { url: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXzUZPivjsu1_YMpoKbZHFbaRCxeVtzx_8W4t2K6voaUJey6OcZidTSJuWTvAM6DcmdtSa-ARCqCURfrUOPVaoNI1Nvay6Ksnwg6X-al9-nAEBFAJThjrXBJfq2m2IAKUnWW.jpg' },
            { url: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABW8ccNAqLMeM_x8SkgIvslSNnRhIqje6U7sukigStW3eb5_UVD8EQF-GuLnOn8do-OVAhmBExZLAlYEfcO_mMTk61Dnld2MT_I9GSo_Th1LJUWt019W856imMHTLhNCRhi16.jpg' },
            { url: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABa3IC_4NEM9BPnW1DF6eo36jJTV1mknNgsj_epYqs1th1b4eyIJG9sSffOuRDxuawJCVyQzI-FlCQPbGKeu13DDle598siM-L7lk2Smra-exgr1xHNQw2rfdBy-6EPU7QLCY.jpg' },
            { url: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeEV6pPv9sztH6kCyfq4UXxlxsvnE_hRMBx5ioWbT2oyx9In775dw8qAC7e5r0J9wEA5qB1y9gGtfpAIlY4jPIaS4nQpmt-0FbTtLI0AzRo0V3ppLoy--UoVNS-udTeHU2FA.jpg' },
        ],
    },
    { 
        id: 2,
        title: 'Em alta',
        items: [
            { url: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABd0FfBADBCge6Tuid7gMe16bsdNQDXB_KAmmtkDbn6MQinDFwx90i5dTCOWLQL8S2_MvTaXekR2I9qSRbQbzzsy35zo1LMRDY7yfLRsnIqFlo3KEOm5G2i6lmhD2BG7Ush7Peg0y28uWss9bRUzI4oI7_wAjVD2YsnyIg9VCY7MZbVA_QbV_GGG9paz3kCVcNdenzs7-V4zFuIa69ukDB-mzGBUO210dAMLulGZsVKdfLx0_v5oVdpB2wNupgAA9NHWB1JNaT1hClfSphfQSRD1mjrOJA0q6af2Z6hAuernhzcmL.jpg' },
            { url: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQ3gvpmK4M1WD7b1Q4spPn88Y6I1vDSSHIyrTMUrS75dmqlFcrvw4kvQi4FbZboLILxfwktW3nD24qGTdVeUyoLGvCngSYcxCxPBlCnNUZoqo_dlw6W4qFGjIkwDMML8nxMviWdDxT_4FHlnKwMDa1KZ_OHkUrhQ7rVVUU8phT2vSHFYKlPEPc5F2yLn2sRkQpazORNG2CtGSbX8YE8WfkopAA3w2JFUgwUgYDLWpbAnstdvaQx-ZgwWQyRNmy7RO2qkJUw5-9Fc9Np6BNtju3CFHphXPE8tAvasOrzhML4qQdL5.jpg' },
            { url: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXaG-wpaJm6f_vlvfPDi6LX-nUekrPppl8TDmTeio_CaMHjiDAHQ9ydiuubx6Sk9XqpjN6xOt-z6yNYPrNEFb1oO4tcmKw40qTBGG2OXqNgNrWC1cqV9X-Bm5_8R1tgASMLMdpnq3zn9fDPU29iVdVi8U1NdXvlCsXrWT03FSmcgImUJwpu0Oc5s91F1uM-49MFl0kBRxID6t_TQe093OLsIdqj4B5_XfIJzcWkPTctSHQWK6M5MTvKtAFwcgzY5dbcA5eh-VSHLnIF0OjJTstw1hhHlbAq48jAFX7qajCkxXtugeXg_l4qUqNXI9N7eF-9bbR_TMJe0JQAQV6QqHGOLfXiamKAleCjJwnH9sf6InUd5zliRQrS0WKV0I9JrCvBeRByvKO_37YZgR4cRRF3E3mKXoiBrs1nnZrDOsnEzzmqWTDIGiEns5SkvqYUNGYvg6fyBQO6WD7w.jpg' },
            { url: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABU6e9JdPWICEh4bd6HkyHaHwMewAbIq-UX1fRYcnNZyumbJ0PccWytvVitLTzkmWPmo0H0meDxiLAJCC5CYGZ-YgFCWY8wmus3Y.webp' },
            { url: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRKdqNLWkcRqh0bOnVaRE3X1AynW2C339a3xP3480nFkLwF8a5ArfpHd4U97-e-OIkMyW9XwjWzgiU-sXaF2a2B5EG6nlCXVVg90jexACUkQ-cFWr9i5U6Jnw9hpfy5SIuXmwtsXDbovlOdaU75ZDTmkPPsVFvjG_S5KActvPULpFCC4Ag1zlOivrpiLaKO5Sa1VBHGGe_0UJGCGIok8uVTFzJ9ttzzwnNgBqAUTBvHrnWn-LALqaqrxK5Uz3mN5wZT5pcb3A2BS0kyhwzXBnM5CnhRgZog8Spi9bbCV_EDzqdhy.jpg' },
            { url: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXIA_5VuDjZWoqRNwCQu67S46S1Z3kiztP_sjQYq5g-QsMdP6ZPMecxoaSOiGebE2Mr0XBxlKxxUKN02y1Li2hs0rQCVXa2DPIJqvjGrhA3WfDiOYSzGcUHFzwFFdCuHX802WHZaVFW0W1bs1HoanDmthk1aCeQfZ50yd9Ww0me5zqm6qWUwqEyY5-5Vr_BUu1ObCb9ubbsStQ5L26IAc4Va7I-aRpB7_3fmSqttp2varm_A4jeE9A1EEocHiHURR2pq6BlHAd-Lyr6jbFZChLfxiCbuTkaObLbAVA5Bo7DNWVqm.jpg' },
            { url: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdvo6d4Ykqk6G4xikIo7VamJwfwd2wVU_Eoyi5Hro5APtC17mHWuQmcXIUuq4qcxldTfdB1cbbhflhspVOM-GGVrQX0II97HL7d5Gm5Qj0w9_d1BCaMarGD62k67pEKpVj4d.jpg' },
            { url: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRk5l-sT5pIu6m2XBwjlxVoPvLj0ZGPZFOJcPRdhgoCtK24nKQra-MsowHORe4I7P2I_K4FAcRX3kMRgJnuY3Y9dydCSzWFacrw.webp' },
            { url: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABaQHkSIbCX1OO5FRtpijBAReRCpvKYAB7mh5V18IoqV_rqkFfvMVbtxcxx0RTFnvawJ9q2ibEZu2LL3ZXhF9kKut4Cb-QBMLs9s362CFyY6QG5AnhP0exx05K-gyUoPRMHFnAu4LonDpLY8ATkJGNBCvCbwHODtu6G58Re7jxI_tutc_ZgbQm1ecqeg4O3Dr-BLM2F_m83gktepUNupzVvRtfz-tuG0-ey0omtD2BoBTg7xM3Z-KBIDDxWOU_Nhi5D_Mgm3hIPFEdBba9GZVjUa_BSoxM0clXs7WNPH352VcaScQeoQc7_lX.jpg' },
            { url: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABaIi2FsKW-YTuwMSJ5XLcAAzGknWr3Jc7gaZLSO9HgZxsFYYvD5VaqLY-p9TnjZ4XuyZPGEL1sEOi7L1eTlWTWcwFdmfqN33acw.webp' },
            { url: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRDsyviQMMTdY1mUMAU6a5QLFtkIzj-ZyxLPRMD6mbURceTpT0c7ren_S0O6j9H9mI-c3e0OKu5Xara2siETtpMDBzcd8UBFmSo.webp' },
            { url: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcYECJV__Y1etne85I1i6Tla7zgW7MRabqqo1O8Si151_eP2H0oOENeKRZtc1wgf905f9GmKPps0W5J9HnNhEcNZNR6z6c27GTYLpzvhAgZaR0XI4TIWOghRzsiwpeoOfpYXA5RMTESMFeiQPt457-BQbZ1gvjPtKXP8YlTtdSL_tBtb3DkvAhxgSYfB1O_gwNj4p8LPBfSc2yO-zfVjGAGPIOnNJn_NHur13fbV65mIZFWLB5PNiXYEXQH9l7UBr_kw-MSLgnZMgn1bp-_EBTb-1qT2ltZ0kUF9axVwuvQf3R6HhVvkLrZZencx30KwzA7Fb-3-sXRiRpuuyGmmMAJT5GQCqRWhbkue4fipzWM.jpg' },
            { url: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABVTjwxMh8O3fvgv60qBJ-NVCfjOLFYQO6wXaoSnNg9OUCA4amU1dQlrF4dvnrNM5FaZlWFkvh_7l4pa6F-R9EayHxaU_id2Fkvg5P1g2VCRmDJrFZ0NvX9USWBRYbuHNo4Tr.jpg' },
        ],
    },
    { 
        id: 3, 
        title: 'Para ver e relaxar',
        items: [
            { url: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABVrKAo6PY8hm-Y_Xrw-v2QPd7UqET7-Kgqc6Ql3HjZdDBNO81LkR6cu_ur8aLY72n6Tl_u0N8yxiuGdTls8tUTTwvm9kq7MIoZE.webp' },
            { url: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfT_7JYg4dwWLWDYZUsXtE9Ng3LcU1zZBGMtMg22hDX3BqELyZMLDTDHptknplqXo-FPOUBa8qBW1V-04c2yhYFkHb1tEpMr9XFnM20MUJV1aV492QWR8ptDRa04z2M2vVFg.jpg' },
            { url: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYoBXDTg-ulBt9qPO_AWXkN3V_LjWULY2oOQS2GtyY-3LqU78IunlTnZfm1y_gbnwrYeZFKo-n5z4HsmIFSyRUPRcgQwuQT3yXL_OfZ8P-1SfFbCOP89H3kcRI6S77S331XH.jpg' },
            { url: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABToIEm0-CkTJs_ZFo1zHeyJPxiGVzT9OYhAJyeQ7ZfETqXrGxHQeMfd0F6jvkOBCBPd74YyYp5NthlU7YmzDbIph1pjgrxkuC3HpPc8RA-T0WfGUAjmAMKbTf7y1jvo4p9hJ.jpg' },
            { url: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRTr4z1O3_yLbfHZWMfuGiG_KulpRWKftRVY28INsN8GLYxn8EZk12SkRy3YwlX-KIyQzrZsLsR8a5IrJ6AnjQnNjzlRAGXBf2QuXpmPPvGck5z1PmQVgwbotr_-33Vj3TwD.jpg' },
            { url: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTjn4-LrKblP3KMF3_Z7x8vWsGmP9_AO7F9IOn0ckzfffDrLSqVK5ShnFmwYD-tyvaG-D1TgWXCd6hrVByb_nsbsPAG9YMRJw6INmyCOB-X0duxsEAUDXYYAwSmMlaIFfkDrzwMQz0xjK5sE32Y4h-sJvTLyLUmtjtI1YslSPgU33zdkCUTZNMYPsQboUNSOyDFWAKZASOQRheRnwh-BTSQR5UrXpvvGqLptl8MZVGQONn-53MngWM0fh5pNgLtxVPFbRgWS1riLR1kPLQsVpp2gL_2gK46k3LzXk4JxeCOsWATC.jpg' },
            { url: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcRVbj0cvpw-dSOKo2r6luLnfrjBwYashKlg172IjH7uv71rU49rmklc7srDfYw7FPP0GYOyxps36lNDHcGz1sjyWPjK7zOlzmJITIR4Ok6F2tcfRow-OvhGdI9TOfwJZCE9.jpg' },
            { url: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWok_1ulCbmWxWl_JsVxQZMe43LEinsAsdDe9ayqWS2NKmB3uNtQ2PXOs0DJmMgt8fi4vPpowA-cwfznHCSQvTAEB59ubmr0OmjqYFF-MsOq3K9UxxRW4WsBv97-XVs2zkik.jpg' },
            { url: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdVnXSHisTdK4s3HSv63MK84uvOve_71y-t9I_JTWvaVCNFRGRIfcnKihLtVt_6j4nhf4_F-n_VKUZv5oFSRq5Fq5IK8wWbQB9O00SxGfeIDG0H4rtbKi9AgXiLpbUMBbLi3.jpg' },
            { url: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZrobS8dEdMJw0xFLmXu2cF0lor90YYvN6bG6HyCPNtLIAHfzPHcv5Gj96gZOmmBaTJmzRsbx_IRH2hU2s0-Cs02WtDytZLkfdHXg7uzmybLxMaVvYicakaiUQLTA8hisOcx.jpg' },
            { url: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTu5WF0PVtHSQUJgVwIGjRVfKKMIEwiLiSk8NOeDclDOJGWUQpwUEtLWt2FSLloPHfYpyWcS23B8tD6ZKoM_IsGBOj85W6T7RAXzWx9ZXZ0-usAb_scyZtSIvixqHFpbNJSn.jpg' },
            { url: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeAd9xnWzL7Oz9B25ss3QgbXvksnZF1NK8GJyC3OnbGHaTDewazsBTlg_4aTuNzcWeY9NN4adrlDooYtVzw-dtEcJRr7wnqRSicT0ryq3akjPYbmNO-g_36HnCu2ehupfcB3.jpg' },
            { url: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABbZ1RM_rd0XuXaUlCC8QLb34oWVez9ijT6-widRLPnmpMdIOIAeOo_RrL-cAFmKQXgaz6nhJ1g09jzhkKjDqowsk71o0UyzCEtA.webp' },
        ],
    },
    { 
        id: 4, 
        title: 'Populares na Netflix',
        items: [
            { url: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdvo6d4Ykqk6G4xikIo7VamJwfwd2wVU_Eoyi5Hro5APtC17mHWuQmcXIUuq4qcxldTfdB1cbbhflhspVOM-GGVrQX0II97HL7d5Gm5Qj0w9_d1BCaMarGD62k67pEKpVj4d.jpg' },
            { url: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRk5l-sT5pIu6m2XBwjlxVoPvLj0ZGPZFOJcPRdhgoCtK24nKQra-MsowHORe4I7P2I_K4FAcRX3kMRgJnuY3Y9dydCSzWFacrw.webp' },
            { url: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABabIDlpKAZSw2g1jPSnXz2x91ew7WnI7z5VJQwCNADHK6OTqgMKeGV8dRqXF00qxbVtzycX9bQEnAST3KBneSand47XT8fzBBDNgN7jrJASfXk3sywdyEfV5OMy-qkUjFpyz.jpg' },
            { url: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABf8i6aBh5gYRavdAOpEeShdXL9x8xfj9gh4q_ldpYnwk4ZfHomhcQ89OpASdFEkFMt1ZyaobixZEO7dtEY9m-quigfCSqTDKwVk.webp' },
            { url: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdzid1h__j-WJDl51wqEfp9CLehx9cTCn5VMoinvssb9n27k8LoUQC2zewsMTR3BmiQg4t1aZL5-jZkG2MvPdhvSx1emQ9tGW33QcpbTPqn9CsMWLUZRC9lpehGMcNzpKuNHvZvnCoowopTnhqQyAFCFkA7eB8g_PaXolZxCN0uyFtfgVvF3g87CEB5i1KSKSChwDCZDULH9XgAFSExW_MY3nC-tZv8gBm0t9fdQ1RmzbuWEZavwA86ZeXGPUR0trUel-LER6HwXDMaYqny9ELi6C8Z2_r5adYdsmA6wKwdhbo9QK2gxZulXGIfFu9tE5UU5vjiu0dH6B1LdQRULz_kWlkXtUMjfZEMMhY0pXbv-U9ZwwNk.jpg' },
            { url: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWMQif2CUoWM1jB-EjaIYEBfw1THjEVJGoJ8Mi0qBa5YIXudvvOajzhaDYHH6ASR8cK-bVxKHdMfkkeRBVXnK20hqrh1tq4lHFl_eORFoDYNRCYS2L1QbCPAyEdGzP5f34ZA.jpg' },
            { url: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXLp9aCBg6tyYB28RBTUsPBfwStOBF1iORzTedpqutSHyOHdA0I-8-9acnq0Y60ML3mhvEbcDCnvOThTpnt37p1OGNyl-AceRysvOuZG7AH1MJIlF_qTDIuIZuE6G9g0RGO8.jpg' },
            { url: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeoppQz1OYVA0m1iCGOlaXeTV5mJCW1tHLHCWTJyGbxnW0PTiIdavCDQJmRkgaVPXAaC1AXPNmfTHWZWendLoFjnvWNH987eyZj4nBF1ICjM_rF_hgN6KdqSIyHAMITLwY2L.jpg' },
            { url: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfnukNOV8fz_asavvFPGAS7AKF7Qaaw9jkpPvY5N4E5SFdAFAlaq40UpQmW_GCeLHFN7sp3WUcaOo27OeI4GL0dmg0ZPzh4kak92NDMHRHL6IMhh84vYpRPIJDmX2aEuhxR1YLnOnmMNnBJVZfcOrhsL7iaK8KZskdEbI2ZV2BkLR6B00Jz1pMbr3IiTvBZZ50VW2pjC8uE9znVnlfYQOcgVPEswA7NW5_CdwvFGo5oAOv4SRKmCf_-FXLQVosd_BhcTs-gPN_T4jHXx7ypcGUdXYZt39Zbh3nT6_Aj7QwOxiPvNkUQnPYHr-TpiOirJADZVkwTPKpRvLdOpt75MhzuNL2vG0RbyPBXpvCD7Ru0.jpg' },
            { url: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdfBvdZekQbkVboCOn9LNh5yQFdtc93NN4msRkK-Qc74utU7prcFZBIowrlydcbdLWkDtRSMjFJMZLETYwOTXnmtPEWIGQfGjFI.webp' },
            { url: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRDsyviQMMTdY1mUMAU6a5QLFtkIzj-ZyxLPRMD6mbURceTpT0c7ren_S0O6j9H9mI-c3e0OKu5Xara2siETtpMDBzcd8UBFmSo.webp' },
            { url: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABaIi2FsKW-YTuwMSJ5XLcAAzGknWr3Jc7gaZLSO9HgZxsFYYvD5VaqLY-p9TnjZ4XuyZPGEL1sEOi7L1eTlWTWcwFdmfqN33acw.webp' },
            { url: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYDiOSvWCvZ2yMQlWlw9wkQsTz4yLThIuiJZLUMSQXG_LerBtgEWrGX3CYV1_xfoTvDC-GlnUxKVZOb44pof6mMq-ngqLUht05M.webp' },
        ],
    },
    { 
        id: 5, 
        title: 'Animes para maratonar',
        items: [
            { url: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYF9GMWDkciH8Ujl1GEVIWwQ1TYSN3K8Ll_PgGTbsqpvEudHZRoLMvfhTFGWs6pFCD_wfm8vh6nOOSdPLSqzUZA6vF8HNv1XdDYSfhkO9HmUzos_HJOnYUFIMTjoBzxnNYhG.jpg?r=cc4' },
            { url: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUq8LZaZezC5K5WI0GkHJ2T1JYFSTNPSGq2U84RFtplJ5MxfC_nvYxa3Enrbr17so_U1z7siY_vd8dkSjbKEkQNJA3F3GYUnwTNlqKQ1--4LQJo6jzyw8uGrlMkID0LTkNkM.jpg?r=e7e' },
            { url: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABaGZbRFmJMvmMsYIzLkCqCj8WlZ8HJmPWjZheOeOFJ10Q8tOIRJeSgxvDzuwYUrTCOnoMSgLZAOHH_eZqLBcNDwy2IqJvK1XXs4.webp?r=503' },
            { url: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABaEEUbk6W4stRzHKwRoVEbzBh8I20FTU9tiHSxOw3kGUUhzD2HXQ_PTZ81Bu39G0WAAsSxfWe2tGvGmehAM8wz3m72aXEUmNcwl-E4i8bXtDpfWQQrZ8KSVptmkpdWB4a5Zwa6OVaRaoHWOKMIaGQ20j8uUzVWRWdmo256NJ9-Ibi5DJq13RDIyxpW4yz5KABSgdrdghbzGEqMnr2Qbugbko7WFNytXxam9wIVqqN130bX_rHk_U6D-RvgwtQKbAllQFXfooXtUl_euGi-N1zyydl_L3Sf1TwsAYSJ7CiSYSchJ_.jpg?r=3a2' },
            { url: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTleDOAj7QTIDz1FbxqQQMeP9C4zFbSXHM11dqLYF2usz5Gp5rG8YUZsPzVF3DjVyuWrBXUXM97Lm_XDqkGXv1ePMQuKNVUIxTRIFaqghuKT6oiHbJcjKI3JPlIDRHT5-wRxyFTMZDS67-LD5091I6HaPOA8lNv4--E7prTfcO9pH8tKQrxWo5nD4ZFdNAAccnNKawDjsZ7uOI_U5L9g4aPZ8jIizh6DT7_t8ZBSi2r-DHTY9IWMB1YUyUTt_H3-Dtx_PNYj98KOaJwlW95hNo4EP_dY86tTmHksQM7UYK9UaYFU.jpg?r=5f9' },
            { url: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSv97vfTahvBASCJg6b1-8Lc1WMj91lJGp_5tia0Mx82syxsTTAYbQakziSmTss9HfR8TiBHRcnDIgFf8jBNNPfs1OXRntDIVZs.webp?r=e28' },
            { url: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQdWQHcPJKY-7eyfMCcTeus6vPRE8ATLnNqeUW9IfpVNcIp8r6F3kHadXuJytujOJh9aX1YiITDBxLh5W2OK8diQnlR71U_Z0UpDjC8oqRCghxZH8b76pZm7SJ3RfRqqBBeJ.jpg?r=568' },
            { url: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTFRyr3XsPDHAQI53j5yXGDx43HoDYf3ICNiaxPql2AG1GEidDG22tnu_nmA20TItWPpKj1Daxxa7oYDNgKm41GQB5EZypU__STh2VHe9rVcRy-eHGtapU8rXcjjAMJ3GwBs.jpg?r=c09' },
            { url: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABaYp8u7KAiWq4DwsYprOY1Mtu-nm3_3F7UBtCX5uUV-lobsdTTwpRjRtjHoPu7QuMimt6OHXmPcoKThs0MzqYqdhIVI14Lbcj2g.webp?r=3fe' },
            { url: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYcKxOtDTOqygbIoG6iZxnfN112d1mfzw1TIUgkFYT2Mml_W2Ry4kXF8hwaqMs_gkOQXPdIV8sVtuAG3xfWz5UgOOnH-203wvaY.webp?r=14f' },
            { url: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABT8oVhDFZ3wi_oyb7VbWpenQUpZI9yNVAlPEnzTIP1zkXqyp6dtweOmaWzD9FtstPp_Em1eEwpl4Z4xM2kDEO9r2yHIToLs3HuI.webp?r=f78' },
            { url: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWcpkJea_YYDTtcCK4z5yYS1ae3zgkH5H6_JiA7NOPQARa7FvAeGa2isJOiFi5WDb250lKwm81cvrfxMb6B3gmIv7WHVVwC0Lnrm1R_STu6ePtdGq-v8P9Ik4RoHKL9uJFtp.jpg?r=b72' },
            { url: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABaJ5wPPc84tXfMBcKLS-4rL1AOuk-EXFjrXbSYze2E8GXuuU6jGSis2a3GxEiT41ZfTFIkyh3yR0Tb6MsmG2RAP6H2Lxt9sw0qE.webp?r=e9c' },
        ],
    },
    { 
        id: 6, 
        title: 'Séries sobre guerra e política',
        items: [
            { url: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfnukNOV8fz_asavvFPGAS7AKF7Qaaw9jkpPvY5N4E5SFdAFAlaq40UpQmW_GCeLHFN7sp3WUcaOo27OeI4GL0dmg0ZPzh4kak92NDMHRHL6IMhh84vYpRPIJDmX2aEuhxR1YLnOnmMNnBJVZfcOrhsL7iaK8KZskdEbI2ZV2BkLR6B00Jz1pMbr3IiTvBZZ50VW2pjC8uE9znVnlfYQOcgVPEswA7NW5_CdwvFGo5oAOv4SRKmCf_-FXLQVosd_BhcTs-gPN_T4jHXx7ypcGUdXYZt39Zbh3nT6_Aj7QwOxiPvNkUQnPYHr-TpiOirJADZVkwTPKpRvLdOpt75MhzuNL2vG0RbyPBXpvCD7Ru0.jpg?r=2c1' },
            { url: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABaobMsdL6ejvTg8B69xj5nl9-JBp_VwbGZI2sFTe7UL5Mka2Hq1drM6wJ8YbpsrcZrchclDJNCZ-yon3WN6-G1sTQ-RpzDx-D0g.webp?r=422' },
            { url: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABf24CMvINahnFR9O7Qe1EYH1EvdJou7b5ppcXAaOwbe87qNpdAhhwr6KUZdmsQhADZHc5KImn3FFGKPDQ4_Bg0JpZ6_tybdAV3s.webp?r=a9e' },
            { url: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABV7UWlRt6LRwJLM3Oe2shTt1Npx5jNpUZdSprHOYNkvkKgtvaFVHdM-SmzVgiIuCmlJBpY_NHssuvJZT9zDfpESB3Ixci1P-0MrV42fWDtNajAM-Vzq1OM7VVymBsRAqVx3s.jpg?r=2f1' },
            { url: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABbcUC06_efAhmhRtetghaewK6IaUiwkbJUysN-86uUXZECcyVVoLYWqMqvPwgbYCr20Gxq96obyQ0cNht_yTA4XAMi1SOMQ9q58.webp?r=717' },
            { url: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABel39Hv_GiOgKd_OwnIYbfhkMDYCe0qduOXTWShYAZL03TrjMYKERAPobIIIxKjsig36Iw2iaJ9i8q7rJXLXzekPLF1bGfebBKamXAGkrUyT1mOvOFBWfziWfB7zgnNZVQCK.jpg?r=605' },
            { url: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeor9EizpEQzvmkQ535xV-4BAogOfBDcNDC32MXd-7AUCZHE12sH2S2GfMyy7HSXQr00mhKAT-NeSE0SPCHDmxHc1KYAAX_D2QyLVTjcBidDX0GWiuqyf1EGq5SJB6zErBGn.jpg?r=d96' },
            { url: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeEZwVEaOQqjeeLCbhU4a1682E1oABUGre7a2nq-qQS2oRbu-ky0OhvlfXy9yj7VjZzryqtA5xMia7cYJx08rFBhmOgX18Tm-QLZcfmZSEnlr9XCWJLFErbNtO8FyB1AV1Nv.jpg?r=878' },
            { url: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABe7-4f7Nwu_JZd8RyDNzHtaRXKMUeVhIoAOzCbN_exbwh3pTIaOAgXTc-4PAVt9oDxJTNQomyBRs-fizJnnqwTT99cBo-BhBRyY.webp?r=dcd' },
            { url: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRa0S2BeggpyaHCOg5taJq1_bgx6sZYYTBksm3pUQuC-ARvMUP-DJKgyXxz94qmrIF8KFk290sSQp-Bu_TG2YUysSEdqm09OZAw.webp?r=394' },
            { url: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTZ3_b5x7mmVcUiJkExpsaO4KMq75gh-eTgieyHui-6dypGObeQNUKuZ_UEF66GrK1xMOZp6Ims-_gbQxm-ap2X7CVC71dPJfsQ.webp?r=9a1' },
            { url: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQeUYqbF2rbzDdirb2u5cxCKqDDXmCYdCC3ksuCjeAvv961dVnJF7RKS_r9jrPoQXGpoklEsVgS0F-GJv1C3hJXKTFosHBm7T4iZud-my8Lq6NccxtifwV4BgzxtuNEqrfnA.jpg?r=e98' },
            { url: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYB8S-gieJQOt4Q4mMllFLlKqFOdMemxQWGoANDHuxjH56KM3I3NO7e9EXO9s9I_YM1ZYliSPVMA9JwBB_ce9SylWmjMgqWNBigz1luDv52bT-4vK0njG4f5jTlFJ7x0o9D6.jpg?r=f49' },
        ],
    },
];

const Movies = () => {
    return (<>
        <Banner banners={banners}/>
        {carousels.map((carousel) => (
            <Carousel 
                key={carousel.id} 
                title={carousel.title} 
                items={carousel.items}>
            </Carousel>
        ))}
    </>);
}

export default Movies;